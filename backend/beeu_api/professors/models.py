"""
Professor/Instructor Model
"""

from django.db import models


class ProfessorTag(models.Model):
    """Tags/Skills for professors"""

    name = models.CharField(
        max_length=100,
        unique=True,
        verbose_name='Nome da Tag',
        help_text='Ex: SABE_INGLES, PROGRAMADOR, DESIGNER'
    )
    description = models.TextField(
        blank=True,
        null=True,
        verbose_name='Descrição'
    )

    class Meta:
        verbose_name = 'Tag de Professor'
        verbose_name_plural = 'Tags de Professores'

    def __str__(self):
        return self.name


class Professor(models.Model):
    """Professor/Instructor model"""

    # Personal Info
    first_name = models.CharField(
        max_length=100,
        verbose_name='Nome'
    )
    last_name = models.CharField(
        max_length=100,
        verbose_name='Sobrenome'
    )
    bio = models.TextField(
        verbose_name='Biografia',
        help_text='Descrição breve do professor'
    )

    # Contact
    email = models.EmailField(
        unique=True,
        verbose_name='E-mail'
    )
    phone = models.CharField(
        max_length=20,
        blank=True,
        null=True,
        verbose_name='Telefone'
    )

    # Media
    photo = models.ImageField(
        upload_to='professors/photos/%Y/%m/',
        blank=True,
        null=True,
        verbose_name='Foto do Professor'
    )

    # Skills & Tags
    tags = models.ManyToManyField(
        ProfessorTag,
        blank=True,
        verbose_name='Habilidades/Tags'
    )
    specialization = models.CharField(
        max_length=200,
        blank=True,
        null=True,
        verbose_name='Especialização',
        help_text='Ex: Business English, Kids, TOEFL'
    )

    # Professional Info
    experience_years = models.PositiveIntegerField(
        default=0,
        verbose_name='Anos de Experiência'
    )
    certifications = models.TextField(
        blank=True,
        null=True,
        verbose_name='Certificações'
    )

    # Availability
    is_active = models.BooleanField(
        default=True,
        verbose_name='Ativo'
    )
    max_students = models.PositiveIntegerField(
        default=10,
        verbose_name='Máximo de Alunos'
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
        verbose_name = 'Professor'
        verbose_name_plural = 'Professores'
        ordering = ['first_name']
        indexes = [
            models.Index(fields=['is_active']),
            models.Index(fields=['specialization']),
        ]

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}".strip()

    @property
    def tag_list(self):
        """Return comma-separated tags"""
        return ", ".join(tag.name for tag in self.tags.all())
