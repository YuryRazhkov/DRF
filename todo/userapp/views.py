from django.shortcuts import render
from rest_framework import mixins, viewsets
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer

from rest_framework.viewsets import ModelViewSet
from .serializer import *
from .models import User


class UserViewSet(mixins.ListModelMixin, mixins.UpdateModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    # serializer_class = UserModelSerializer
    queryset = User.objects.all()

    # renderer_classes = [JSONRenderer, BrowsableAPIRenderer]

    def get_serializer_class(self):

        if self.request.version == 'v2':
            print('UserModelSerializerNewVesion')
            return UserModelSerializerNewVesion
        print('UserModelSerializer')
        return UserModelSerializer
