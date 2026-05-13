"""
FAQ Model for Frequently Asked Questions
"""

from django.db import models


class FAQ(models.Model):
    """FAQ model - Frequently Asked Questions"""

    CATEGORY_CHOICES = [
        ('general', 'Geral'),
        ('home', 'Home'),
        ('kids', 'Kids/Crianças'),
        ('empresas', 'Empresas'),
        ('pricing', 'Preços'),
        ('metodologia', 'Metodologia'),
    ]

    # Content
    question = models.CharField(
        max_length=300,
        unique=True,
        verbose_name='Pergunta'
    )
    answer = models.TextField(
        verbose_name='Resposta',
        help_text='Resposta completa para a pergunta'
    )

    # Organization
    category = models.CharField(
        max_length=50,
        choices=CATEGORY_CHOICES,
        default='general',
        verbose_name='Categoria'
    )
    order = models.PositiveIntegerField(
        default=0,
        verbose_name='Ordem de Exibição'
    )

    # Status
    is_active = models.BooleanField(
        default=True,
        verbose_name='Ativo'
    )

    # SEO
    keywords = models.CharField(
        max_length=200,
        blank=True,
        null=True,
        verbose_name='Palavras-chave',
        help_text='Separadas por vírgula para SEO'
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
        verbose_name = 'FAQ'
        verbose_name_plural = 'FAQs'
        ordering = ['category', 'order']
        unique_together = ('category', 'question')
        indexes = [
            models.Index(fields=['category', 'is_active']),
        ]

    def __str__(self):
        return f"[{self.category.upper()}] {self.question}"

    @property
    def short_answer(self):
        """Return first 150 chars of answer"""
        return self.answer[:150] + "..." if len(self.answer) > 150 else self.answer
