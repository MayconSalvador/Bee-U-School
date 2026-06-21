"""Global DRF exception handler for consistent API error responses."""

from typing import Any

from rest_framework.views import exception_handler


def custom_exception_handler(exc: Exception, context: dict[str, Any]):
    """Wrap DRF errors in the same response envelope used by ApiResponse."""
    response = exception_handler(exc, context)

    if response is None:
        return response

    original_data = response.data
    message = "Erro de validacao"
    errors: Any = original_data

    if isinstance(original_data, dict) and "detail" in original_data:
        message = str(original_data["detail"])
        errors = {}

    response.data = {
        "status": "error",
        "message": message,
        "errors": errors,
    }
    return response
