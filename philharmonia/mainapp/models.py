from django.db import models

from authapp.models import UserProfile


class Concert(models.Model):
    name = models.CharField(max_length=128, unique=True)
    desc = models.TextField()
    organizer = models.ForeignKey('authapp.UserProfile', on_delete=models.PROTECT)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    audience = models.ManyToManyField('authapp.UserProfile', related_name='audience')

    def __str__(self):
        return f'{self.name}'

    class Meta:
        verbose_name_plural = 'концерт'
        verbose_name = 'концерты'


class ConcertItem(models.Model):
    name = models.CharField(max_length=128)
    concert = models.ForeignKey(Concert, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.name}'
