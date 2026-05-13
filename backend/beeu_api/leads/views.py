"""
Django REST Framework Views for Leads
"""

from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
import logging

from .models import Lead
from .serializers import LeadSerializer, LeadListSerializer, LeadCreateSerializer
from beeu_api.shared.utils import ApiResponse

logger = logging.getLogger(__name__)


class LeadViewSet(viewsets.ModelViewSet):
    """
    ViewSet for Lead management

    Endpoints:
    - GET    /api/v1/leads/               - List leads (admin only)
    - POST   /api/v1/leads/               - Create lead (public)
    - GET    /api/v1/leads/{id}/          - Lead detail
    - PATCH  /api/v1/leads/{id}/          - Update lead
    - DELETE /api/v1/leads/{id}/          - Delete lead
    - PATCH  /api/v1/leads/{id}/convert/  - Mark as converted
    """

    queryset = Lead.objects.all().order_by('-created_at')
    serializer_class = LeadSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['status', 'page_origin', 'audience', 'phone_type']
    search_fields = ['first_name', 'last_name', 'email', 'phone']
    ordering_fields = ['created_at', 'updated_at', 'first_name']

    def get_serializer_class(self):
        """Return appropriate serializer based on action"""
        if self.action == 'create':
            return LeadCreateSerializer
        elif self.action == 'list':
            return LeadListSerializer
        return LeadSerializer

    def get_permissions(self):
        """Set permissions per action"""
        if self.action == 'create':
            permission_classes = [AllowAny]  # Public form
        elif self.action == 'list':
            permission_classes = [IsAuthenticated]  # Admin only
        else:
            permission_classes = [IsAuthenticated]

        return [permission() for permission in permission_classes]

    def create(self, request, *args, **kwargs):
        """Create lead from public form - no auth required"""
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        logger.info(f"New lead created: {serializer.data['email']}")

        return ApiResponse.success(
            data=serializer.data,
            message="Lead criado com sucesso! Você receberá um contato em breve.",
            status_code=status.HTTP_201_CREATED
        )

    def list(self, request, *args, **kwargs):
        """List all leads (admin/authenticated only)"""
        queryset = self.filter_queryset(self.get_queryset())
        page = self.paginate_queryset(queryset)

        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return ApiResponse.success(data=serializer.data, message="Leads recuperados com sucesso")

    def retrieve(self, request, *args, **kwargs):
        """Get single lead detail"""
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return ApiResponse.success(data=serializer.data)

    def update(self, request, *args, **kwargs):
        """Update lead"""
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        return ApiResponse.success(data=serializer.data, message="Lead atualizado com sucesso")

    def destroy(self, request, *args, **kwargs):
        """Delete lead"""
        instance = self.get_object()
        self.perform_destroy(instance)
        return ApiResponse.success(
            message="Lead deletado com sucesso",
            status_code=status.HTTP_204_NO_CONTENT
        )

    @action(
        detail=True,
        methods=['patch'],
        permission_classes=[IsAuthenticated],
        url_path='convert'
    )
    def convert_lead(self, request, pk=None):
        """Mark lead as converted"""
        lead = self.get_object()
        lead.status = 'convertido'
        lead.save()

        serializer = self.get_serializer(lead)
        logger.info(f"Lead {lead.email} marked as converted")

        return ApiResponse.success(
            data=serializer.data,
            message="Lead marcado como convertido com sucesso"
        )

    @action(
        detail=True,
        methods=['patch'],
        permission_classes=[IsAuthenticated],
        url_path='contact'
    )
    def contact_lead(self, request, pk=None):
        """Mark lead as being contacted"""
        lead = self.get_object()
        old_status = lead.status
        lead.status = 'em_contato'
        lead.save()

        serializer = self.get_serializer(lead)
        logger.info(f"Lead {lead.email} status changed from {old_status} to em_contato")

        return ApiResponse.success(
            data=serializer.data,
            message="Status do lead atualizado para 'Em Contato'"
        )

    @action(
        detail=False,
        methods=['get'],
        permission_classes=[IsAuthenticated],
        url_path='stats'
    )
    def get_stats(self, request):
        """Get leads statistics"""
        total_leads = Lead.objects.count()
        new_leads = Lead.objects.filter(status='novo').count()
        contacted_leads = Lead.objects.filter(status='em_contato').count()
        converted_leads = Lead.objects.filter(status='convertido').count()
        lost_leads = Lead.objects.filter(status='perdido').count()

        stats = {
            'total': total_leads,
            'novo': new_leads,
            'em_contato': contacted_leads,
            'convertido': converted_leads,
            'perdido': lost_leads,
            'conversion_rate': (converted_leads / total_leads * 100) if total_leads > 0 else 0,
        }

        return ApiResponse.success(data=stats, message="Estatísticas de leads")
