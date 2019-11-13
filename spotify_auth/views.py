import os
import sys
import spotipy
import spotipy.util as util

from dotenv import load_dotenv

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied

spotify_client_id = os.getenv('SPOTIPY_CLIENT_ID')
print(spotify_client_id)
spotify_client_secret = os.getenv('SPOTIPY_CLIENT_SECRET')
print(spotify_client_secret)
spotify_redirect_uri = os.getenv('SPOTIPY_REDIRECT_URI')
print(spotify_redirect_uri)

scope = 'user-library-read'

if len(sys.argv) > 1:
    username = sys.argv[1]
else:
    print("Usage: %s username" % (sys.argv[0],))
    sys.exit()

token = util.prompt_for_user_token(username, scope, client_id=spotify_client_id,client_secret=spotify_client_secret,redirect_uri=spotify_redirect_uri)

if token:
    sp = spotipy.Spotify(auth=token)
    results = sp.current_user_saved_tracks()
    for item in results['items']:
        track = item['track']
        print(track['name'] + ' - ' + track['artists'][0]['name'])
else:
    print("Can't get token for", username)

class AuthOutput(APIView):
    def get(self, _request):
        return Response(print('success'))
