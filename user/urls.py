from django.urls import path
from .views import SpotifyUser

urlpatterns = [
    path('user', SpotifyUser.as_view()),
]
