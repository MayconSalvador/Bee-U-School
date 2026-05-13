"""Statistics app configuration"""
from django.apps import AppConfig


class StatisticsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'beeu_api.statistics'
    verbose_name = 'Statistics & Metrics'
