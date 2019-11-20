# pylint: disable=no-member,arguments-differ
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView,ListAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from .models import SpotifyUser, Song, Collections
from .serializers import SpotifyUserSerializer, SongSerializer, CollectionsSerializer



# Create your views here.
class SpotifyUserListView(ListCreateAPIView):
    queryset = SpotifyUser.objects.all()
    serializer_class = SpotifyUserSerializer

class SpotifyUserDetailView(RetrieveUpdateDestroyAPIView):
    queryset = SpotifyUser.objects.all()
    serializer_class = SpotifyUserSerializer

class SongCreateView(ListCreateAPIView):
    queryset = Song.objects.all()
    serializer_class = SongSerializer

class CollectionsListView(ListCreateAPIView):
    queryset = Collections.objects.all()
    serializer_class = CollectionsSerializer
