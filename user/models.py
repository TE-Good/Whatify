from django.db import models

# Create your models here.
class SpotifyUser(models.Model):
    username = models.CharField(max_length=50, unique=True)
    # displayname = models.CharField(max_length=50)
    # image = models.CharField(max_length=500)
    