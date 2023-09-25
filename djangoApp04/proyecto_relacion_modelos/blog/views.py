from django.shortcuts import render
from .models import Entrada, Autor

# Create your views here.

def lista_entradas(request):
    entradas = Entrada.objects.all()
    return render(request, 'blog/lista_entradas.html', {'entradas': entradas})

def entradas_por_autor(request, autor_id):
    autor = Autor.objects.get(pk=autor_id)
    entradas = Entrada.objects.filter(autor=autor)
    return render(request, 'blog/entradas_por_autor.html', {'autor': autor, 'entradas': entradas})