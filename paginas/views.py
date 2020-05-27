from django.shortcuts import render
from .models import Apontamento

from django.http import JsonResponse

# Create your views here.
def inicio(request):
    return render(request, 'index.html', {})


def funcionarios(request):
    if request.method == 'POST':
        print(request.POST['nome']) # a pessoa digitou
        usuario = Apontamento.objects.create(nome_usuario=request.POST['nome'])
        usuario.save()
        return render(request, 'index.html', {})

    if request.method == 'GET':
        ultimos10 = Apontamento.objects.order_by('-id')[:10]
        return JsonResponse({'funcionarios': [i.serializar for i in ultimos10]}, safe=False)