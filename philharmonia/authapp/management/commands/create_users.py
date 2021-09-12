from django.core.management.base import BaseCommand

from authapp.models import UserProfile


class Command(BaseCommand):
    help = "Creates default users"

    def handle(self, *args, **options):
        UserProfile.objects.create_superuser('kpk', password='pass')
        users = [
            {'username': 'Darya', 'password': 'pass'},
            {'username': 'Victor', 'password': 'pass'},
            {'username': 'Victoria', 'password': 'pass'},
            {'username': 'Svetlana', 'password': 'pass'},
            {'username': 'Evgeniy', 'password': 'pass'},
            {'username': 'Alexander', 'password': 'pass'},
            {'username': 'Vladimir', 'password': 'pass'},
        ]
        print('Пользователи созданы')

