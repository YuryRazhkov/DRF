from .base import *

DEBUG = False
ALLOWED_HOSTS = ['*']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'todo',
        'USER': 'yury',
        'PASSWORD': 'yury123',
        'HOST': 'localhost',
        'PORT': '5432'
    }
}