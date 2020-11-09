"""clavisteV URL Configuration


"""
from django.contrib import admin
from django.urls import path,include
from mantenedor.views import registroClienteViewset
from rest_framework import routers

router = routers.DefaultRouter()
router.register('clientes',registroClienteViewset)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include(router.urls)),
]
