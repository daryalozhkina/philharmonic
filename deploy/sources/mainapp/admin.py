from django.contrib import admin

from mainapp.models import Concert, ConcertItem

admin.site.register(Concert)
admin.site.register(ConcertItem)
