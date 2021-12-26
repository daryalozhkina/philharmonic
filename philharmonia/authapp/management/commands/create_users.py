from django.core.management.base import BaseCommand

from authapp.models import UserProfile


class Command(BaseCommand):

    def handle(self, *args, **options):
        i = 0

        UserProfile.objects.create_superuser('kpk', password='pass')
        UserProfile.objects.create_user('Darya', password='pass')
        # users = [
        #     {'username': 'Darya', 'password': 'pass'},
        #     {'username': 'Victor', 'password': 'pass'},
        #     {'username': 'Victoria', 'password': 'pass'},
        #     {'username': 'Svetlana', 'password': 'pass'},
        #     {'username': 'Evgeniy', 'password': 'pass'},
        #     {'username': 'Alexander', 'password': 'pass'},
        #     {'username': 'Vladimir', 'password': 'pass'},
        # ]
        print('Пользователи созданы')

