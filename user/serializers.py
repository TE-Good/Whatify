from rest_framework import serializers
from .models import SpotifyUser, Song, Collections


class SongSerializer(serializers.ModelSerializer):

    # def create(self, data): 

    #     song = Song(**data)
    #     song.save()
    #     return song

    class Meta:
        model = Song
        fields = ('track_id', 'track_name', 'track_artist', 'track_preview', 'track_in_album', 'track_album_art', 'owner')

class CollectionsSerializer(serializers.ModelSerializer):
    
    # def create(self, data):

    #     collection = Collections(**data)
    #     collection.save()
    #     return collection

    class Meta:
        model = Collections
        fields = ('SpotifyUser_username_id', 'Song_track_id')

class SpotifyUserSerializer(serializers.ModelSerializer):

    songs = SongSerializer(many=True)

    def create(self, data): 

        songs_data = data.pop('songs')
        spotifyUser = SpotifyUser(**data)
        songs = [Song.objects.get(**song_data) for song_data in songs_data]
        spotifyUser.save()
        spotifyUser.songs.set(songs)
        return spotifyUser

    class Meta:
        model = SpotifyUser
        fields = ('id', 'username', 'displayname', 'image', 'songs', 'score')
