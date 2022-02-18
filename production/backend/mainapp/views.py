from django.views.generic import ListView
from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ModelViewSet

from mainapp.models import Concert, ConcertItem
from mainapp.serializers import ConcertSerializer, ConcertItemSerializer


class ConcertList(ListView):
    model = Concert


class ConcertItemList(ListView):
    model = ConcertItem


class ConcertViewSet(ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Concert.objects.filter(is_active=True)
    serializer_class = ConcertSerializer


class ConcertItemViewSet(ModelViewSet):
    queryset = ConcertItem.objects.all()
    serializer_class = ConcertItemSerializer
