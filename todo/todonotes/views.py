from django.shortcuts import get_object_or_404
from django.urls import reverse
from rest_framework import mixins, viewsets, status
from rest_framework.pagination import PageNumberPagination
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from . import serializer
from .serializer import ProjectModelSerializer, ToDoModelSerializer
from .models import Project, ToDo


class ProjectPagination(PageNumberPagination):
    page_size = 20

class ProjectViewSet(viewsets.ModelViewSet):
    serializer_class = ProjectModelSerializer
    queryset = Project.objects.all()
    pagination_class = ProjectPagination
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]

    def get_queryset(self):
        queryset = Project.objects.all()
        name = self.request.query_params.get('name', '')
        if name:
            queryset = queryset.filter(project_name__contains=name)
        return queryset



class ToDoPagination(PageNumberPagination):
    page_size = 10

class ToDoViewSet(viewsets.ModelViewSet):
    serializer_class = ToDoModelSerializer
    queryset = ToDo.objects.all()
    pagination_class = ToDoPagination
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]

    def destroy(self, request, pk=None):
        target_object = get_object_or_404(ToDo, pk=pk)
        target_object.is_done = True
        target_object.save()
        serializer = ToDoModelSerializer(target_object)
        return Response(serializer.data)



