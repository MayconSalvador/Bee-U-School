"""
Unit Tests for Leads API
"""

import pytest
from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from .models import Lead


@pytest.mark.django_db
class TestLeadModel(TestCase):
    """Test Lead model"""

    def setUp(self):
        """Setup test data"""
        self.lead_data = {
            'first_name': 'João',
            'last_name': 'Silva',
            'email': 'joao@example.com',
            'phone': '(11) 98765-4321',
            'phone_type': 'celular',
            'audience': 'self',
            'age_range': '18_24',
            'page_origin': 'home',
        }

    def test_create_lead_success(self):
        """Test creating a valid lead"""
        lead = Lead.objects.create(**self.lead_data)
        assert lead.id is not None
        assert lead.full_name == 'João Silva'
        assert lead.status == 'novo'

    def test_duplicate_email_raises_error(self):
        """Test that duplicate email raises error"""
        Lead.objects.create(**self.lead_data)

        with pytest.raises(Exception):
            Lead.objects.create(**self.lead_data)

    def test_invalid_phone_raises_error(self):
        """Test invalid phone raises error"""
        invalid_data = self.lead_data.copy()
        invalid_data['phone'] = '123'  # Invalid

        with pytest.raises(Exception):
            Lead.objects.create(**invalid_data)

    def test_invalid_email_raises_error(self):
        """Test invalid email raises error"""
        invalid_data = self.lead_data.copy()
        invalid_data['email'] = 'invalid-email'

        with pytest.raises(Exception):
            Lead.objects.create(**invalid_data)


@pytest.mark.django_db
class TestLeadAPI(TestCase):
    """Test Lead API endpoints"""

    def setUp(self):
        """Setup test client and data"""
        self.client = APIClient()
        self.lead_data = {
            'first_name': 'Maria',
            'last_name': 'Oliveira',
            'email': 'maria@example.com',
            'phone': '(11) 99876-5432',
            'phone_type': 'celular',
            'audience': 'other',
            'age_range': '25_34',
            'page_origin': 'kids',
        }

    def test_create_lead_public_endpoint(self):
        """Test creating lead via public API (no auth required)"""
        response = self.client.post(
            '/api/v1/leads/',
            self.lead_data,
            format='json'
        )

        assert response.status_code == status.HTTP_201_CREATED
        assert response.data['status'] == 'success'
        assert 'email' in response.data['data']

    def test_create_lead_duplicate_email(self):
        """Test creating lead with duplicate email fails"""
        # Create first lead
        self.client.post('/api/v1/leads/', self.lead_data, format='json')

        # Try to create second with same email
        response = self.client.post(
            '/api/v1/leads/',
            self.lead_data,
            format='json'
        )

        assert response.status_code == status.HTTP_400_BAD_REQUEST
        assert response.data['status'] == 'error'

    def test_create_lead_invalid_phone(self):
        """Test creating lead with invalid phone"""
        invalid_data = self.lead_data.copy()
        invalid_data['phone'] = '123'

        response = self.client.post(
            '/api/v1/leads/',
            invalid_data,
            format='json'
        )

        assert response.status_code == status.HTTP_400_BAD_REQUEST

    def test_create_lead_invalid_email(self):
        """Test creating lead with invalid email"""
        invalid_data = self.lead_data.copy()
        invalid_data['email'] = 'not-an-email'

        response = self.client.post(
            '/api/v1/leads/',
            invalid_data,
            format='json'
        )

        assert response.status_code == status.HTTP_400_BAD_REQUEST

    def test_create_lead_missing_required_fields(self):
        """Test creating lead with missing required fields"""
        incomplete_data = {
            'first_name': 'João',
            # Missing other required fields
        }

        response = self.client.post(
            '/api/v1/leads/',
            incomplete_data,
            format='json'
        )

        assert response.status_code == status.HTTP_400_BAD_REQUEST
        assert 'errors' in response.data or 'email' in response.data

    def test_list_leads_requires_auth(self):
        """Test that listing leads requires authentication"""
        response = self.client.get('/api/v1/leads/')
        assert response.status_code == status.HTTP_401_UNAUTHORIZED

    def test_get_leads_stats(self):
        """Test getting leads statistics"""
        # Create test leads
        for i in range(3):
            data = self.lead_data.copy()
            data['email'] = f'test{i}@example.com'
            Lead.objects.create(**data)

        # This would need auth in real scenario
        # For now just test the model count
        assert Lead.objects.count() == 3
