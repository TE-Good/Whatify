from django.db import models

# Create your models here.
class SpotifyUser(models.Model):
    username = models.CharField(max_length=500, unique=True, default='')
    displayname = models.CharField(max_length=500, null=True)
    image = models.CharField(max_length=500, null=True)
    score = models.IntegerField(default=0)
    
class Song(models.Model):
    track_id = models.CharField(max_length=200, unique=True)
    track_name = models.CharField(max_length=200, unique=False)
    track_artist = models.CharField(max_length=200, unique=False)
    track_preview = models.CharField(max_length=300)
    track_in_album = models.CharField(max_length=200, unique=False)
    track_album_art = models.CharField(max_length=200, unique=False)


