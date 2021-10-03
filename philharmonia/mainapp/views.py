from django.views.generic import ListView
from mainapp.serializers import ConcertSerializer, ConcertItemSerializer
from rest_framework.viewsets import ModelViewSet

from mainapp.models import Concert, ConcertItem


class ConcertList(ListView):
    model = Concert


class ConcertItemList(ListView):
    model = ConcertItem


class ConcertViewSet(ModelViewSet):
    queryset = Concert.objects.all()
    serializer_class = ConcertSerializer


class ConcertItemViewSet(ModelViewSet):
    queryset = ConcertItem.objects.all()
    serializer_class = ConcertItemSerializer
