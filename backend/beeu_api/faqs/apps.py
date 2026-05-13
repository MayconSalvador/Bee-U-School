"""FAQs app configuration"""
from django.apps import AppConfig


class FaqsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'beeu_api.faqs'
    verbose_name = 'FAQs'
