"""todo URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions
from rest_framework.authtoken import views
from rest_framework.routers import DefaultRouter
from userapp.views import UserViewSet
from graphene_django.views import GraphQLView
from todonotes.views import ProjectViewSet, ToDoViewSet

router = DefaultRouter()
router.register('users', UserViewSet)
router.register('Projects', ProjectViewSet)
router.register('ToDo', ToDoViewSet)
# filter_router = DefaultRouter()
# filter_router.register('param', views.ArticleParamFilterViewSet)

schema_view = get_schema_view(
    openapi.Info(
        title="ToDO",
        default_version='0.1',
        description="Documentation to out project",
        contact=openapi.Contact(email="admin@admin.local"),
        license=openapi.License(name="MIT License"),
        ),
    public=True,
    permission_classes=[permissions.AllowAny],
)


urlpatterns = [
    path('admin/', admin.site.urls, name='admin'),
    path('api/', include(router.urls), name='api'),
    # path('filters/', include(filter_router.urls)),
    path('api-auth/', include('rest_framework.urls')),
    path('api-auth-token/', views.obtain_auth_token),
    # path('api/<str:version>/users', UserViewSet.as_view({'get': 'list'})),

    path('swagger/', schema_view.with_ui('swagger')),
    path('swagger/<str:format>/', schema_view.without_ui()),
    path('redoc/', schema_view.with_ui('redoc')),
    path('graphql/', GraphQLView.as_view(graphiql=True)),
]
