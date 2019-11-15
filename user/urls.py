from django.urls import path
from .views import SpotifyUserListView, SongCreateView

urlpatterns = [
    path('user', SpotifyUserListView.as_view()),
    path('songcreate', SongCreateView.as_view())
]
