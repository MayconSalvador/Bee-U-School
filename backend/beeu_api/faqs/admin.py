"""Django Admin configuration for FAQs"""
from django.contrib import admin
from .models import FAQ


@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    list_display = ('question', 'category', 'order', 'is_active')
    list_filter = ('category', 'is_active', 'created_at')
    search_fields = ('question', 'answer', 'keywords')
    readonly_fields = ('created_at', 'updated_at', 'short_answer')

    fieldsets = (
        ('Conteúdo', {
            'fields': ('question', 'answer', 'short_answer')
        }),
        ('Organização', {
            'fields': ('category', 'order', 'is_active')
        }),
        ('SEO', {
            'fields': ('keywords',)
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
