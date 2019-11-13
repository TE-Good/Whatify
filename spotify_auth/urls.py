from django.urls import path
from .views import AuthOutput, Callback

urlpatterns = [
  path('login', AuthOutput.as_view()),
  path('callback', Callback.as_view())
]
