from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView,ListAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from .models import SpotifyUser
from .serializers import SpotifyUserSerializer


# Create your views here.
class SpotifyUserListView(ListCreateAPIView):
    queryset = SpotifyUser.objects.all()
    serializer_class = SpotifyUserSerializer
