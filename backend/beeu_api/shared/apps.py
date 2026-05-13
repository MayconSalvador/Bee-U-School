"""Shared utilities app configuration"""
from django.apps import AppConfig


class SharedConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'beeu_api.shared'
    verbose_name = 'Shared Utilities'
