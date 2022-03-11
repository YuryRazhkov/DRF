from django.shortcuts import render
from rest_framework import mixins, viewsets
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer

from rest_framework.viewsets import ModelViewSet
from .serializer import UserModelSerializer
from .models import User


class UserViewSet(mixins.ListModelMixin, mixins.UpdateModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    serializer_class = UserModelSerializer
    queryset = User.objects.all()
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
