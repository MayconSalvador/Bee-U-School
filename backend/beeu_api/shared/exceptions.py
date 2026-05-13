"""
Custom exceptions for Bee U API
"""

from rest_framework.exceptions import APIException
from rest_framework import status


class BeeUAPIException(APIException):
    """Base exception for Bee U API"""

    status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
    default_detail = "Um erro ocorreu na API"
    default_code = "error"


class InvalidPhoneNumberException(BeeUAPIException):
    """Exception for invalid phone numbers"""

    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = "Número de telefone inválido"
    default_code = "invalid_phone"


class InvalidEmailException(BeeUAPIException):
    """Exception for invalid emails"""

    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = "E-mail inválido"
    default_code = "invalid_email"


class InvalidAgeRangeException(BeeUAPIException):
    """Exception for invalid age ranges"""

    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = "Faixa etária inválida"
    default_code = "invalid_age_range"


class DuplicateLeadException(BeeUAPIException):
    """Exception for duplicate leads"""

    status_code = status.HTTP_409_CONFLICT
    default_detail = "Lead já existe com este e-mail"
    default_code = "duplicate_lead"


class ResourceNotFoundException(BeeUAPIException):
    """Exception for resource not found"""

    status_code = status.HTTP_404_NOT_FOUND
    default_detail = "Recurso não encontrado"
    default_code = "not_found"
