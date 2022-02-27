from django.db import models
from django.conf import settings

from userapp.models import User


class Project(models.Model):
    project_name = models.CharField(verbose_name='проект', max_length=500)
    user = models.ManyToManyField(User)
    rep_link = models.CharField(max_length=500)


class ToDo(models.Model):  # what needs o be done on the project
    project_id = models.ForeignKey(Project, on_delete=models.CASCADE)
    body_todo = models.CharField(verbose_name='мероприятие', max_length=500)
    create_date = models.DateField(auto_now_add=True)
    update_date = models.DateField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.PROTECT)
    is_done = models.BooleanField()
