"""
Statistics & Metrics Model
"""

from django.db import models


class Statistics(models.Model):
    """Statistics/Metrics model - KPIs displayed on pages"""

    TYPE_CHOICES = [
        ('students', 'Número de Alunos'),
        ('companies', 'Número de Empresas'),
        ('success_rate', 'Taxa de Sucesso (%)'),
        ('avg_time_fluency', 'Tempo Médio para Fluência (meses)'),
        ('satisfaction_rate', 'Taxa de Satisfação (%)'),
        ('teachers', 'Número de Professores'),
        ('years_in_market', 'Anos de Mercado'),
        ('countries', 'Países Atendidos'),
        ('weekly_progress', 'Progresso Semanal (%)'),
        ('rating', 'Avaliação (0-5)'),
        ('reviews_count', 'Número de Avaliações'),
        ('custom', 'Customizado'),
    ]

    PAGE_CHOICES = [
        ('home', 'Home'),
        ('kids', 'Kids'),
        ('empresas', 'Empresas'),
        ('todas', 'Todas as Páginas'),
    ]

    # Metric Info
    stat_type = models.CharField(
        max_length=50,
        choices=TYPE_CHOICES,
        verbose_name='Tipo de Métrica'
    )
    label = models.CharField(
        max_length=200,
        verbose_name='Rótulo',
        help_text='Texto exibido ao lado do número'
    )
    value = models.CharField(
        max_length=100,
        verbose_name='Valor',
        help_text='Pode ser número, percentual, ou texto (ex: 98%, 1.200, 6 meses)'
    )
    description = models.TextField(
        blank=True,
        null=True,
        verbose_name='Descrição Detalhada'
    )

    # Display
    page = models.CharField(
        max_length=20,
        choices=PAGE_CHOICES,
        default='home',
        verbose_name='Página'
    )
    order = models.PositiveIntegerField(
        default=0,
        verbose_name='Ordem de Exibição'
    )
    section = models.CharField(
        max_length=100,
        blank=True,
        null=True,
        verbose_name='Seção',
        help_text='Ex: HomeStats, Differentiators'
    )

    # Icon/Visual
    icon_name = models.CharField(
        max_length=100,
        blank=True,
        null=True,
        verbose_name='Nome do Ícone',
        help_text='Lucide React icon name'
    )
    color = models.CharField(
        max_length=20,
        default='primary',
        verbose_name='Cor',
        help_text='primary, navy, gold, etc'
    )

    # Status
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
        verbose_name = 'Estatística'
        verbose_name_plural = 'Estatísticas'
        ordering = ['page', 'section', 'order']
        unique_together = ('stat_type', 'page', 'section')
        indexes = [
            models.Index(fields=['page', 'is_active']),
            models.Index(fields=['stat_type']),
        ]

    def __str__(self):
        return f"{self.label} - {self.value} ({self.page})"

    @property
    def display_value(self):
        """Return formatted value for display"""
        return self.value
