"""Django Admin configuration for Statistics"""
from django.contrib import admin
from .models import Statistics


@admin.register(Statistics)
class StatisticsAdmin(admin.ModelAdmin):
    list_display = ('label', 'value', 'stat_type', 'page', 'order', 'is_active')
    list_filter = ('page', 'stat_type', 'is_active', 'created_at')
    search_fields = ('label', 'value', 'description')
    readonly_fields = ('created_at', 'updated_at')

    fieldsets = (
        ('Métrica', {
            'fields': ('stat_type', 'label', 'value', 'description')
        }),
        ('Exibição', {
            'fields': ('page', 'section', 'order', 'icon_name', 'color', 'is_active')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
