"""Django Admin configuration for Professors"""
from django.contrib import admin
from .models import Professor, ProfessorTag


@admin.register(ProfessorTag)
class ProfessorTagAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')
    search_fields = ('name',)


@admin.register(Professor)
class ProfessorAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'specialization', 'email', 'is_active', 'experience_years')
    list_filter = ('is_active', 'specialization', 'experience_years')
    search_fields = ('first_name', 'last_name', 'email', 'specialization')
    filter_horizontal = ('tags',)
    readonly_fields = ('created_at', 'updated_at', 'tag_list')

    fieldsets = (
        ('Informações Pessoais', {
            'fields': ('first_name', 'last_name', 'bio', 'photo')
        }),
        ('Contato', {
            'fields': ('email', 'phone')
        }),
        ('Profissional', {
            'fields': ('specialization', 'experience_years', 'certifications', 'tags', 'tag_list')
        }),
        ('Disponibilidade', {
            'fields': ('is_active', 'max_students')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
