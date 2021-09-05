from django.core.management.base import BaseCommand

from authapp.models import UserProfile


class Command(BaseCommand):
    help = "Creates default users"

    def handle(self, *args, **options):
        UserProfile.objects.create_superuser('kpk', password='pass')
        UserProfile.objects.create_user('Darya', password='pass')
        UserProfile.objects.create_user('Victor', password='pass')
        UserProfile.objects.create_user('Victoria', password='pass')
        UserProfile.objects.create_user('Svetlana', password='pass')
        UserProfile.objects.create_user('Evgeniy', password='pass')
        UserProfile.objects.create_user('Alexander', password='pass')
        UserProfile.objects.create_user('Vladimir', password='pass')
        print('users created')

