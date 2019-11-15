from django.db import models

# Create your models here.
class SpotifyUser(models.Model):
    username = models.CharField(max_length=500, unique=True, default='')
    displayname = models.CharField(max_length=500)
    image = models.CharField(max_length=500, null=True)
    score = models.IntegerField(default=0)
    