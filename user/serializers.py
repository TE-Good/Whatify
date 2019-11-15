from rest_framework import serializers
from .models import User

class SpotifyUserSerializer(serializers.ModelSerializer):

    def create(self, data):  # data is the incoming json converted to a python dict

        user = User(**data) # create the station from the data left over
        user.save() # we need to save to ensure primary key has been created before attempting to set many to many relationship on the model
        return user

    class Meta:
        model = User
        fields = ('id', 'username')
        # fields = ('id', 'username', 'displayname', 'image')
