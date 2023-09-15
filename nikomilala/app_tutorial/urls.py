from django.urls import path
from . import views
urlpatterns = [
    path("", views.tutorials_home, name="tutorials_home"),
]
