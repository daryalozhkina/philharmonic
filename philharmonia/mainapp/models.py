from django.db import models

from authapp.models import UserProfile


class Concert(models.Model):
    name = models.CharField(max_length=128)
    desc = models.TextField()
    organizer = models.ForeignKey('authapp.UserProfile', on_delete=models.PROTECT)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    audience = models.ManyToManyField('authapp.UserProfile', related_name='audience')

class Genre(models.Model):
    name = models.CharField(max_length=128)
    concert = models.ForeignKey(Concert, on_delete=models.CASCADE)

