"""
Shared utilities and helpers for Bee U API
"""

from rest_framework.response import Response
from rest_framework import status
from django.core.paginator import Paginator
import logging

logger = logging.getLogger(__name__)


class ApiResponse:
    """Standard API response formatter"""

    @staticmethod
    def success(data=None, message="Success", status_code=status.HTTP_200_OK):
        """Return successful response"""
        return Response(
            {
                "status": "success",
                "message": message,
                "data": data,
            },
            status=status_code,
        )

    @staticmethod
    def error(message="Error", status_code=status.HTTP_400_BAD_REQUEST, errors=None):
        """Return error response"""
        return Response(
            {
                "status": "error",
                "message": message,
                "errors": errors or {},
            },
            status=status_code,
        )

    @staticmethod
    def paginated(queryset, request, serializer_class, page_size=20):
        """Return paginated response"""
        paginator = Paginator(queryset, page_size)
        page_number = request.query_params.get("page", 1)

        try:
            page_obj = paginator.page(page_number)
        except Exception as e:
            logger.error(f"Pagination error: {str(e)}")
            return Response(
                {
                    "status": "error",
                    "message": "Invalid page number",
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        serializer = serializer_class(page_obj.object_list, many=True)

        return Response(
            {
                "status": "success",
                "data": serializer.data,
                "pagination": {
                    "count": paginator.count,
                    "page_size": page_size,
                    "total_pages": paginator.num_pages,
                    "current_page": page_number,
                    "has_next": page_obj.has_next(),
                    "has_previous": page_obj.has_previous(),
                },
            },
            status=status.HTTP_200_OK,
        )


class FieldValidators:
    """Custom field validators"""

    @staticmethod
    def validate_phone(phone_number: str) -> bool:
        """Validate Brazilian phone number"""
        import re

        # Remove non-digits
        phone = re.sub(r"\D", "", phone_number)

        # Check if it's valid (11 digits for celular, 10 for fixo)
        if len(phone) in (10, 11):
            return True
        return False

    @staticmethod
    def validate_email_format(email: str) -> bool:
        """Validate email format"""
        import re

        pattern = r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        return re.match(pattern, email) is not None


class AgeRanges:
    """Age range constants"""

    CHOICES = [
        ("17_under", "17 anos ou -"),
        ("18_24", "18-24 anos"),
        ("25_34", "25-34 anos"),
        ("35_over", "35 anos ou +"),
    ]

    MAPPING = {
        "17-under": "17_under",
        "17 anos ou -": "17_under",
        "18-24": "18_24",
        "18-24 anos": "18_24",
        "25-34": "25_34",
        "25-34 anos": "25_34",
        "35+": "35_over",
        "35 anos ou +": "35_over",
    }

    @staticmethod
    def get_value(label: str):
        """Get normalized age range value from label"""
        return AgeRanges.MAPPING.get(label, label)
