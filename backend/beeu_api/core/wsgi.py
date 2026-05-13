"""
WSGI config for Bee U API project.
It exposes the WSGI callable as a module-level variable named ``application``.
"""

import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'beeu_api.core.settings')
application = get_wsgi_application()
