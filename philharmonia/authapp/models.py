from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _


class UserProfile(AbstractUser):
    
    GENDER_MALE= 'm'
    GENDER_FEMALE = 'f'
    GENDER_CHOICES = (
        (GENDER_MALE, _("Мужчина")),
        (GENDER_FEMALE, _("Женщина")),
    )

    date_birth = models.DateField(_('date birth'), null=True)
    gender = models.CharField(_('gender'), max_length=1,
                              choices=GENDER_CHOICES, blank=True)
