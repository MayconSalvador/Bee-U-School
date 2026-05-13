"""
Client Company Model for corporate clients
"""

from django.db import models


class ClientCompany(models.Model):
    """Client Company model - Companies using Bee U services"""

    INDUSTRY_CHOICES = [
        ('tech', 'Tecnologia'),
        ('finance', 'Finanças'),
        ('retail', 'Varejo'),
        ('manufacturing', 'Manufatura'),
        ('services', 'Serviços'),
        ('education', 'Educação'),
        ('healthcare', 'Saúde'),
        ('other', 'Outro'),
    ]

    TYPE_CHOICES = [
        ('logo_only', 'Apenas Logo'),
        ('with_testimonial', 'Com Depoimento'),
        ('partner', 'Parceiro'),
    ]

    # Company Info
    name = models.CharField(
        max_length=200,
        unique=True,
        verbose_name='Nome da Empresa'
    )
    description = models.TextField(
        blank=True,
        null=True,
        verbose_name='Descrição'
    )
    website = models.URLField(
        blank=True,
        null=True,
        verbose_name='Website'
    )

    # Contact
    contact_name = models.CharField(
        max_length=150,
        blank=True,
        null=True,
        verbose_name='Nome de Contato'
    )
    contact_email = models.EmailField(
        blank=True,
        null=True,
        verbose_name='E-mail de Contato'
    )
    contact_phone = models.CharField(
        max_length=20,
        blank=True,
        null=True,
        verbose_name='Telefone'
    )

    # Company Classification
    industry = models.CharField(
        max_length=50,
        choices=INDUSTRY_CHOICES,
        default='other',
        verbose_name='Setor'
    )
    client_type = models.CharField(
        max_length=30,
        choices=TYPE_CHOICES,
        default='logo_only',
        verbose_name='Tipo de Cliente'
    )
    size = models.CharField(
        max_length=50,
        blank=True,
        null=True,
        verbose_name='Tamanho da Empresa',
        help_text='Ex: 1-50, 51-200, 200+'
    )

    # Media
    logo = models.ImageField(
        upload_to='clients/logos/%Y/%m/',
        verbose_name='Logo'
    )
    banner = models.ImageField(
        upload_to='clients/banners/%Y/%m/',
        blank=True,
        null=True,
        verbose_name='Banner'
    )

    # Business Info
    employees_trained = models.PositiveIntegerField(
        default=0,
        verbose_name='Funcionários Treinados'
    )
    partnership_start = models.DateField(
        blank=True,
        null=True,
        verbose_name='Início da Parceria'
    )

    # Display
    order = models.PositiveIntegerField(
        default=0,
        verbose_name='Ordem de Exibição'
    )
    is_active = models.BooleanField(
        default=True,
        verbose_name='Ativo'
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
        verbose_name = 'Empresa Cliente'
        verbose_name_plural = 'Empresas Clientes'
        ordering = ['order', 'name']
        indexes = [
            models.Index(fields=['is_active', 'order']),
            models.Index(fields=['industry']),
        ]

    def __str__(self):
        return self.name

    @property
    def has_testimonial(self):
        """Check if company has an associated testimonial"""
        return self.client_type == 'with_testimonial'
