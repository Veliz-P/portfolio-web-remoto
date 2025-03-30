from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, "index.html")

def project_cavamym_view(request):
    return render(request, "project_cavamym.html")