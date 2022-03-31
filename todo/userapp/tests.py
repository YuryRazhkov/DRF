from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, APIClient, APITestCase

from .views import *


class TestUsersApi(TestCase):

    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get('/api/users')
        view = UserViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


    def test_create_list(self):
        factory = APIRequestFactory()
        request = factory.get('/api/users')
        view = UserViewSet.as_view({'get': 'list'})
        User.objects.create(username='111', email='2@2.by')
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

#
    def test_create_list_APIclient(self):
        client = APIClient()
        User.objects.create(username='1111', email='12@2.by')
        response = client.get('/api/users', follow=True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class TestUsersAPITestCase(APITestCase):
    def test_get_list(self):
        response = self.client.get('/api/users', follow=True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_list_auth(self):
        User.objects.create_superuser('qwer', email='qwer@qwer.by', password='qwer1234')
        User.objects.create(username='1111', email='12@2.by')
        self.client.login(username='qwer', password='qwer1234')
        response = self.client.get('/api/users', follow=True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

