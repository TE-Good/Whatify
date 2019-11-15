from rest_framework import serializers
from .models import SpotifyUser, Song

class SpotifyUserSerializer(serializers.ModelSerializer):

    def create(self, data):  # data is the incoming json converted to a python dict

        user = SpotifyUser(**data) # create the station from the data left over
        user.save() # we need to save to ensure primary key has been created before attempting to set many to many relationship on the model
        return user

    class Meta:
        model = SpotifyUser
        fields = ('id', 'username', 'displayname', 'image')

class SongSerializer(serializers.ModelSerializer):

    def create(self, data):  # data is the incoming json converted to a python dict

        song = Song(**data) # create the station from the data left over
        song.save() # we need to save to ensure primary key has been created before attempting to set many to many relationship on the model
        return song

    class Meta:
        model = Song
        fields = ('track_id', 'track_name', 'track_name', 'track_artist', 'track_preview', 'track_in_album', 'track_album_art')

