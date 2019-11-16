from django.urls import path
from .views import SpotifyUserListView, SongCreateView, CollectionsListView

urlpatterns = [
    path('user', SpotifyUserListView.as_view()),
    path('songcreate', SongCreateView.as_view()),
    path('collections', CollectionsListView.as_view())
]
