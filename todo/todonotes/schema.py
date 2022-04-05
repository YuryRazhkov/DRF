import graphene
from graphene_django import DjangoObjectType
from .models import *
from graphene import ObjectType
from userapp.models import User

#
# class Query(graphene.ObjectType):
#     hello = graphene.String(default_value="Hi!")
#
# schema = graphene.Schema(query=Query)
#


class Projects(DjangoObjectType):

    class Meta:
        model = Project
        fields = '__all__'

class Users(DjangoObjectType):

    class Meta:
        model = User
        fields = '__all__'

class ToDoItems(DjangoObjectType):

    class Meta:
        model = ToDo
        fields = '__all__'

class Query(graphene.ObjectType):
    all_projects = graphene.List(Projects)
    all_users = graphene.List(Users)
    all_todo = graphene.List(ToDoItems)


    def resolve_all_projects(root, info):
        return Project.objects.all()
    #
    # def resolve_all_users(root, info):
    #     return User.objects.all()
    #
    # def resolve_all_todo(root, info):
    #     return ToDo.objects.all()





schema = graphene.Schema(query=Query)