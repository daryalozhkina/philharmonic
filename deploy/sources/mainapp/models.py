from django.db import models, transaction, DatabaseError

from authapp.models import UserProfile


class Concert(models.Model):
    name = models.CharField(max_length=128, unique=True)
    desc = models.TextField()
    organizer = models.ForeignKey('authapp.UserProfile', on_delete=models.PROTECT,
                                  related_name='concerts',
                                  related_query_name='concerts')
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    audience = models.ManyToManyField('authapp.UserProfile', related_name='audience')
    is_active = models.BooleanField(default=True, db_index=True)

    def __str__(self):
        return f'{self.name}'

    def restore(self):
        self.is_active = True
        self.name = self.name[1:]
        self.concertitem_set.all().update(is_active=True)
        self.save()
        return self

    def delete(self, using=None, keep_parents=False):
        self.is_active = False
        with transaction.atomic() as _:
            self.concertitem_set.all().update(is_active=False)
        self.name = f'_{self.name}'
        self.save()
        return 1, {}

    class Meta:
        verbose_name_plural = 'концерт'
        verbose_name = 'концерты'


class ConcertItem(models.Model):
    name = models.CharField(max_length=128)
    concert = models.ForeignKey(Concert, on_delete=models.CASCADE,
                                related_name='items',
                                related_query_name='concerts-items')
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f'{self.name}'
