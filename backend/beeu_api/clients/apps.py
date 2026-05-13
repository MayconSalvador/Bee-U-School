"""Clients app configuration"""
from django.apps import AppConfig


class ClientsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'beeu_api.clients'
    verbose_name = 'Clients & Companies'
