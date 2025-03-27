from django.urls import path
from . import views
urlpatterns = [
    path("", views.index, name="index"),
    path("cavamym/", views.project_cavamym_view, name="cavamym")
]
