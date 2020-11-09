from rest_framework import serializers
from mantenedor.models import registro_cliente


class registroClienteSerializers(serializers.ModelSerializer):

    class Meta:
        model=registro_cliente
        fields = ['nombre','apellidoP','apellidoM','email','telefono']