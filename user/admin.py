from django.contrib import admin
from .models import SpotifyUser, Song

# Register your models here.
admin.site.register(SpotifyUser)
admin.site.register(Song)
