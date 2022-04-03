from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import AbstractUser
from django.db import models

from .models import User


class UserAdmin(UserAdmin):
    model = User

admin.site.register(User, UserAdmin)