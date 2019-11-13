from django.urls import path
from .views import AuthOutput

urlpatterns = [
  path('login', AuthOutput.as_view())
]
