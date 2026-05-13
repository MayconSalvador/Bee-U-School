"""
Main URL Configuration for Bee U API
"""

from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView, SpectacularRedocView

# API Endpoints
urlpatterns = [
    # Admin
    path('admin/', admin.site.urls),

    # Authentication (JWT)
    path('api/v1/auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/v1/auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # API Schema & Documentation
    path('api/v1/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/v1/docs/swagger/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('api/v1/docs/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),

    # Application APIs
    path('api/v1/leads/', include('beeu_api.leads.urls')),
    path('api/v1/testimonials/', include('beeu_api.testimonials.urls')),
    path('api/v1/professors/', include('beeu_api.professors.urls')),
    path('api/v1/faqs/', include('beeu_api.faqs.urls')),
    path('api/v1/clients/', include('beeu_api.clients.urls')),
    path('api/v1/statistics/', include('beeu_api.statistics.urls')),
]

# Media files
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
