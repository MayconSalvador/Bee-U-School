"""Django Admin configuration for Clients"""
from django.contrib import admin
from .models import ClientCompany


@admin.register(ClientCompany)
class ClientCompanyAdmin(admin.ModelAdmin):
    list_display = ('name', 'industry', 'client_type', 'is_active', 'employees_trained')
    list_filter = ('industry', 'client_type', 'is_active', 'partnership_start')
    search_fields = ('name', 'contact_name', 'contact_email')
    readonly_fields = ('created_at', 'updated_at', 'has_testimonial')

    fieldsets = (
        ('Informações da Empresa', {
            'fields': ('name', 'description', 'website', 'logo', 'banner')
        }),
        ('Contato', {
            'fields': ('contact_name', 'contact_email', 'contact_phone')
        }),
        ('Classificação', {
            'fields': ('industry', 'client_type', 'size')
        }),
        ('Negócio', {
            'fields': ('employees_trained', 'partnership_start', 'has_testimonial')
        }),
        ('Exibição', {
            'fields': ('order', 'is_active')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
