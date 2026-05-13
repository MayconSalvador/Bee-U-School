"""
Testimonial Model for customer feedback
"""

from django.db import models


class Testimonial(models.Model):
    """Testimonial/Review model - Customer feedback & stories"""

    PAGE_CHOICES = [
        ('home', 'Home'),
        ('empresas', 'Empresas'),
        ('kids', 'Kids'),
        ('todas', 'Todas as Páginas'),
    ]

    # Content
    quote = models.TextField(
        verbose_name='Depoimento',
        help_text='Texto do depoimento do cliente'
    )
    author_name = models.CharField(
        max_length=150,
        verbose_name='Nome do Autor',
        help_text='Nome completo de quem deu o depoimento'
    )
    author_role = models.CharField(
        max_length=150,
        verbose_name='Profissão/Cargo',
        help_text='Profissão ou cargo do autor'
    )

    # Featured & Display
    featured = models.BooleanField(
        default=False,
        verbose_name='Destaque',
        help_text='Mostrar em destaque na página'
    )
    page_origin = models.CharField(
        max_length=20,
        choices=PAGE_CHOICES,
        default='home',
        verbose_name='Página de Origem'
    )

    # Media
    author_photo = models.ImageField(
        upload_to='testimonials/photos/%Y/%m/',
        blank=True,
        null=True,
        verbose_name='Foto do Autor'
    )

    # Metadata
    order = models.PositiveIntegerField(
        default=0,
        verbose_name='Ordem de Exibição',
        help_text='Ordem de exibição na página (0 = não mostrado)'
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
        verbose_name = 'Depoimento'
        verbose_name_plural = 'Depoimentos'
        ordering = ['order', '-created_at']
        indexes = [
            models.Index(fields=['featured', 'page_origin']),
            models.Index(fields=['is_active']),
        ]

    def __str__(self):
        return f"{self.author_name} - {self.author_role}"

    @property
    def short_quote(self):
        """Return first 100 chars of quote"""
        return self.quote[:100] + "..." if len(self.quote) > 100 else self.quote
