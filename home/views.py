from django.shortcuts import render,redirect

from django.http import JsonResponse

# from .models import Recipe

# Create your views here.

def index(request):
    return render(request, "index.html") # you can also give variables ,

def about(request):
    return render(request,"about.html")

def services(request):
    return render(request, "services.html")

def contact(request):
    return render(request, "contact.html")
