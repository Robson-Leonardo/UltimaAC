from django.db import models
from datetime import datetime


class Apontamento(models.Model):
    nome_usuario = models.CharField(max_length=25, null=True, blank=False)
    hora = models.DateTimeField(default=datetime.now, blank=False)

    @property
    def serializar(self):
        return {
            'id': self.id,
            'nome_usuario': self.nome_usuario,
            'hora': str(self.hora)[11:16]
        }