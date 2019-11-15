from django.urls import path
from .views import SpotifyUserListView

urlpatterns = [
    path('user', SpotifyUserListView.as_view()),
]
