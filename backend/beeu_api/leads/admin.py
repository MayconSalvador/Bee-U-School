"""Django Admin configuration for Leads"""
from django.contrib import admin
from .models import Lead


@admin.register(Lead)
class LeadAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'phone', 'status', 'page_origin', 'created_at')
    list_filter = ('status', 'page_origin', 'audience', 'phone_type', 'created_at')
    search_fields = ('first_name', 'last_name', 'email', 'phone')
    readonly_fields = ('created_at', 'updated_at')

    fieldsets = (
        ('Informações Pessoais', {
            'fields': ('first_name', 'last_name', 'email')
        }),
        ('Contato', {
            'fields': ('phone', 'phone_type')
        }),
        ('Curso', {
            'fields': ('audience', 'age_range', 'page_origin')
        }),
        ('Status', {
            'fields': ('status', 'notes')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )

    def full_name(self, obj):
        return obj.full_name
    full_name.short_description = 'Nome Completo'
