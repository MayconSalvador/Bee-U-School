"""
Django REST Framework Serializers for Leads
"""

from rest_framework import serializers
from .models import Lead
from beeu_api.shared.utils import FieldValidators, AgeRanges
from beeu_api.shared.exceptions import (
    InvalidPhoneNumberException,
    InvalidEmailException,
    InvalidAgeRangeException,
    DuplicateLeadException,
)


class LeadSerializer(serializers.ModelSerializer):
    """Serializer for Lead model with validation"""

    full_name = serializers.SerializerMethodField()
    age_range_display = serializers.CharField(source='get_age_range_display', read_only=True)
    status_display = serializers.CharField(source='get_status_display', read_only=True)
    phone_type_display = serializers.CharField(source='get_phone_type_display', read_only=True)
    audience_display = serializers.CharField(source='get_audience_display', read_only=True)

    class Meta:
        model = Lead
        fields = [
            'id',
            'first_name',
            'last_name',
            'full_name',
            'email',
            'phone',
            'phone_type',
            'phone_type_display',
            'audience',
            'audience_display',
            'age_range',
            'age_range_display',
            'page_origin',
            'status',
            'status_display',
            'notes',
            'created_at',
            'updated_at',
        ]
        read_only_fields = ['id', 'created_at', 'updated_at', 'full_name']
        extra_kwargs = {
            'notes': {'required': False, 'allow_blank': True},
        }

    def get_full_name(self, obj):
        return obj.full_name

    def validate_email(self, value):
        """Validate email format and check duplicates"""
        if not FieldValidators.validate_email_format(value):
            raise InvalidEmailException()

        # Check for duplicates (excluding current instance on update)
        qs = Lead.objects.filter(email=value)
        if self.instance:
            qs = qs.exclude(pk=self.instance.pk)

        if qs.exists():
            raise DuplicateLeadException()

        return value

    def validate_phone(self, value):
        """Validate phone format"""
        if not FieldValidators.validate_phone(value):
            raise InvalidPhoneNumberException()
        return value

    def validate_age_range(self, value):
        """Validate age range value"""
        valid_ranges = [choice[0] for choice in Lead.AGE_RANGE_CHOICES]
        if value not in valid_ranges:
            raise InvalidAgeRangeException()
        return value

    def validate(self, data):
        """Cross-field validation"""
        # Validate audience and age_range
        if data.get('audience') and not data.get('age_range'):
            raise serializers.ValidationError({
                'age_range': 'Faixa etária é obrigatória quando audiência é selecionada'
            })

        return data


class LeadListSerializer(serializers.ModelSerializer):
    """Simplified serializer for list views"""

    full_name = serializers.CharField(source='get_full_name', read_only=True)
    status_display = serializers.CharField(source='get_status_display', read_only=True)

    class Meta:
        model = Lead
        fields = ['id', 'full_name', 'email', 'status', 'status_display', 'created_at']
        read_only_fields = fields


class LeadCreateSerializer(serializers.ModelSerializer):
    """Serializer for creating leads from public forms"""

    class Meta:
        model = Lead
        fields = ['first_name', 'last_name', 'email', 'phone', 'phone_type', 'audience', 'age_range', 'page_origin']
        required_fields = ['first_name', 'last_name', 'email', 'phone', 'phone_type', 'audience', 'age_range']

        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True},
            'email': {'required': True},
            'phone': {'required': True},
            'phone_type': {'required': True},
            'audience': {'required': True},
            'age_range': {'required': True},
        }

    def validate_email(self, value):
        """Validate email format and check duplicates"""
        if not FieldValidators.validate_email_format(value):
            raise InvalidEmailException()

        if Lead.objects.filter(email=value).exists():
            raise DuplicateLeadException()

        return value

    def validate_phone(self, value):
        """Validate phone format"""
        if not FieldValidators.validate_phone(value):
            raise InvalidPhoneNumberException()
        return value

    def validate_age_range(self, value):
        """Validate age range"""
        valid_ranges = [choice[0] for choice in Lead.AGE_RANGE_CHOICES]
        if value not in valid_ranges:
            raise InvalidAgeRangeException()
        return value

    def create(self, validated_data):
        """Create lead with status 'novo'"""
        lead = Lead.objects.create(
            status='novo',
            **validated_data
        )
        return lead
