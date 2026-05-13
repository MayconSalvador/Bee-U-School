"""Professors app configuration"""
from django.apps import AppConfig


class ProfessorsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'beeu_api.professors'
    verbose_name = 'Professors & Instructors'
