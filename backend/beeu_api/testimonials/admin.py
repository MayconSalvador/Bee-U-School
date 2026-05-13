"""Django Admin configuration for Testimonials"""
from django.contrib import admin
from .models import Testimonial


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('author_name', 'author_role', 'featured', 'page_origin', 'order', 'is_active')
    list_filter = ('featured', 'page_origin', 'is_active', 'created_at')
    search_fields = ('author_name', 'author_role', 'quote')
    readonly_fields = ('created_at', 'updated_at', 'short_quote')

    fieldsets = (
        ('Conteúdo', {
            'fields': ('quote', 'short_quote')
        }),
        ('Autor', {
            'fields': ('author_name', 'author_role', 'author_photo')
        }),
        ('Exibição', {
            'fields': ('featured', 'page_origin', 'order', 'is_active')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
