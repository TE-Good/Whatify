from rest_framework import serializers
from .models import SpotifyUser, Song, Collections

class SpotifyUserSerializer(serializers.ModelSerializer):

    def create(self, data): 

        user = SpotifyUser(**data) 
        user.save() 
        return user

    class Meta:
        model = SpotifyUser
        fields = ('id', 'username', 'displayname', 'image')

class SongSerializer(serializers.ModelSerializer):

    def create(self, data): 

        song = Song(**data)
        song.save()
        return song

    class Meta:
        model = Song
        fields = ('track_id', 'track_name', 'track_name', 'track_artist', 'track_preview', 'track_in_album', 'track_album_art')

class CollectionsSerializer(serializers.ModelSerializer):
    
    def create(self, data):

        collection = Collections(**data)
        collection.save()
        return collection

    class Meta:
        model = Collections
        fields = ('SpotifyUser_username_id', 'Song_track_id')
        # UniqueConstraint(fields=['SpotifyUser_username_id', 'Song_track_id'])