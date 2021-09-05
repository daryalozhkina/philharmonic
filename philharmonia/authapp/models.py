from django.db import models
from django.contrib.auth.models import AbstractUser


class UserProfile(AbstractUser):
    date_birth = models.DateField(verbose_name='Дата рождения', null=True)
    email = models.EmailField(verbose_name='Адрес эллектронной почты', blank=True)

    def __str__(self):
        return self.email
