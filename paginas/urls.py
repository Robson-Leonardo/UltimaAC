from django.urls import path

from .views import inicio, funcionarios


urlpatterns = [
    path('', inicio),
    path('funcionarios', funcionarios)
]