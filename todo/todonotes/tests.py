# from django.test import TestCase
# from rest_framework import status
# from rest_framework.test import APIRequestFactory, APITestCase
#
# from .views import *
#
#
# class TestProjectApi(TestCase):
#
#     def test_get_list(self):
#         factory = APIRequestFactory()
#         request = factory.get('/api/Projects')
#         view = ProjectViewSet.as_view({'get': 'list'})
#         response = view(request)
#         self.assertEqual(response.status_code, status.HTTP_200_OK)
#
#
# class TestToDotApi(TestCase):
#
#     def test_get_list(self):
#         factory = APIRequestFactory()
#         request = factory.get('/api/ToDo')
#         view = ToDoViewSet.as_view({'get': 'list'})
#         response = view(request)
#         self.assertEqual(response.status_code, status.HTTP_200_OK)
#
#
# class TestTodoAPITestCase(APITestCase):
#     def test_get_list(self):
#         response = self.client.get('/api/ToDo', follow=True)
#         self.assertEqual(response.status_code, status.HTTP_200_OK)



