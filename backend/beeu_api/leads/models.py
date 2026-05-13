"""
Lead/Registration Model for capturing new users
"""

from django.db import models
from django.core.exceptions import ValidationError
from beeu_api.shared.utils import FieldValidators, AgeRanges
from beeu_api.shared.exceptions import (
    InvalidPhoneNumberException,
    InvalidEmailException,
    InvalidAgeRangeException,
    DuplicateLeadException,
)


class Lead(models.Model):
    """Lead/Registration model - Captures user interest"""

    AUDIENCE_CHOICES = [
        ('self', 'Para mim'),
        ('other', 'Para outra pessoa'),
    ]

    PHONE_TYPE_CHOICES = [
        ('celular', 'Celular'),
        ('fixo', 'Fixo'),
    ]

    AGE_RANGE_CHOICES = AgeRanges.CHOICES

    STATUS_CHOICES = [
        ('novo', 'Novo'),
        ('em_contato', 'Em Contato'),
        ('qualificado', 'Qualificado'),
        ('perdido', 'Perdido'),
        ('convertido', 'Convertido'),
    ]

    PAGE_ORIGIN_CHOICES = [
        ('home', 'Home'),
        ('kids', 'Para Seu Filho'),
        ('empresas', 'Empresas'),
        ('outro', 'Outro'),
    ]

    # Personal Info
    first_name = models.CharField(
        max_length=100,
        verbose_name='Nome',
        help_text='Primeiro nome do usuário'
    )
    last_name = models.CharField(
        max_length=100,
        verbose_name='Sobrenome',
        help_text='Sobrenome do usuário'
    )
    email = models.EmailField(
        unique=True,
        verbose_name='E-mail',
        help_text='E-mail único para contato'
    )

    # Phone Info
    phone = models.CharField(
        max_length=20,
        verbose_name='Telefone',
        help_text='Número de telefone para contato'
    )
    phone_type = models.CharField(
        max_length=10,
        choices=PHONE_TYPE_CHOICES,
        default='celular',
        verbose_name='Tipo de Telefone'
    )

    # Course Info
    audience = models.CharField(
        max_length=10,
        choices=AUDIENCE_CHOICES,
        verbose_name='Audiência',
        help_text='Para quem é o curso: self (para ele) ou other (para outra pessoa)'
    )
    age_range = models.CharField(
        max_length=20,
        choices=AGE_RANGE_CHOICES,
        verbose_name='Faixa Etária'
    )
    page_origin = models.CharField(
        max_length=20,
        choices=PAGE_ORIGIN_CHOICES,
        default='home',
        verbose_name='Página de Origem'
    )

    # Status & Metadata
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='novo',
        verbose_name='Status do Lead'
    )
    notes = models.TextField(
        blank=True,
        null=True,
        verbose_name='Notas'
    )

    # Timestamps
    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name='Data de Criação'
    )
    updated_at = models.DateTimeField(
        auto_now=True,
        verbose_name='Data de Atualização'
    )

    class Meta:
        verbose_name = 'Lead'
        verbose_name_plural = 'Leads'
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['email']),
            models.Index(fields=['status']),
            models.Index(fields=['created_at']),
        ]

    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.email})"

    def clean(self):
        """Validate Lead data"""
        # Check duplicate email
        if Lead.objects.filter(email=self.email).exclude(pk=self.pk).exists():
            raise DuplicateLeadException("Lead com este e-mail já existe")

        # Validate phone
        if not FieldValidators.validate_phone(self.phone):
            raise InvalidPhoneNumberException("Número de telefone inválido")

        # Validate email
        if not FieldValidators.validate_email_format(self.email):
            raise InvalidEmailException("Formato de e-mail inválido")

        # Validate age range
        valid_ranges = [choice[0] for choice in self.AGE_RANGE_CHOICES]
        if self.age_range not in valid_ranges:
            raise InvalidAgeRangeException("Faixa etária inválida")

    def save(self, *args, **kwargs):
        self.clean()
        super().save(*args, **kwargs)

    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}".strip()
