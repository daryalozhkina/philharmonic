from rest_framework.serializers import ModelSerializer

from mainapp.models import Concert, ConcertItem


class ConcertSerializer(ModelSerializer):
    class Meta:
        model = Concert
        fields = '__all__'


class ConcertItemSerializer(ModelSerializer):
    class Meta:
        model = ConcertItem
        fields = '__all__'