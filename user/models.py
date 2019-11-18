from django.db import models

# Create your models here.
class Song(models.Model):
    track_id = models.CharField(max_length=200, unique=True)
    track_name = models.CharField(max_length=200, unique=False)
    track_artist = models.CharField(max_length=200, unique=False)
    track_preview = models.CharField(max_length=300)
    track_in_album = models.CharField(max_length=200, unique=False)
    track_album_art = models.CharField(max_length=200, unique=False)
    owner = models.CharField(max_length=200, unique=False, default='')

class Collections(models.Model):
    SpotifyUser_username_id = models.CharField(max_length=500, default='')
    Song_track_id = models.CharField(max_length=500, default='')

    class Meta:
      unique_together = ('SpotifyUser_username_id', 'Song_track_id')

class SpotifyUser(models.Model):
    username = models.CharField(max_length=500, unique=True, default='')
    displayname = models.CharField(max_length=500, null=True)
    image = models.CharField(max_length=500, null=True)
    score = models.IntegerField(default=0)
    songs = models.ManyToManyField(Song, related_name="SpotifyUser", blank=True)
