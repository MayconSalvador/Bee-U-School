"""Leads app configuration"""
from django.apps import AppConfig


class LeadsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'beeu_api.leads'
    verbose_name = 'Leads & Registrations'
