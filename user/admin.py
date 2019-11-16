from django.contrib import admin
from .models import SpotifyUser, Song, Collections

# Register your models here.
admin.site.register(SpotifyUser)
admin.site.register(Song)
admin.site.register(Collections)
