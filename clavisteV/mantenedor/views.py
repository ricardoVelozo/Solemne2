# Create your views here.
from django.shortcuts import render
from rest_framework import viewsets
from mantenedor.models import registro_cliente

from clavisteV.serializers import registroClienteSerializers

class registroClienteViewset(viewsets.ModelViewSet):
    queryset = registro_cliente.objects.all()
    serializer_class=registroClienteSerializers



