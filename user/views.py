from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView,ListAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from .models import User
from .serializers import UserSerializer


# Create your views here.
class UserListView(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer