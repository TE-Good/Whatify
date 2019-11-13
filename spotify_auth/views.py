import os
import sys
import spotipy
import spotipy.util as util
import webbrowser

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

# if len(sys.argv) > 1:
#     username = sys.argv[1]
# else:
#     print("Usage: %s username" % (sys.argv[0],))
#     sys.exit()

# token = util.prompt_for_user_token(username, scope, client_id=spotify_client_id,client_secret=spotify_client_secret,redirect_uri=spotify_redirect_uri)

# if token:
#     sp = spotipy.Spotify(auth=token)
#     results = sp.current_user_saved_tracks()
#     for item in results['items']:
#         track = item['track']
#         print(track['name'] + ' - ' + track['artists'][0]['name'])
# else:
#     print("Can't get token for", username)



sp = spotipy.oauth2.SpotifyOAuth(spotify_client_id, spotify_client_secret, spotify_redirect_uri, state=None, scope=scope, cache_path=None, proxies=None)
url = sp.get_authorize_url()

# print(url)
# code = sp.parse_response_code('https://www.whatify.com/whatify?code=AQDTHh3oJXiMyzdSlZFcwVn7BBYxrafyDPoEh04dK_yqn8SNKEl3qtOR-i9WtgB1SWvViYYNaqq3OVzqRE_1ev0KTMS--7G-i7Mc_FmeRdWhmIJAbvuh2sOO9xTUsDu_KxHXFGflhiYXh_1Fx8wGPhHYFlpA_AvijAivQz-SMSykZMYa-8TSQ40b19syBW1-o6uO5k1VjRjKaXIoXRIgiexmcg')
# print(code)
# token = ''
# cache = sp.get_access_token('')
# print(cache)

class AuthOutput(APIView):
    def get(self, _request):
        return Response(url)

class Callback(APIView):
    def get(self, request):
        # return Response(print('self', request))
        # return Response(print('self', request.data))
        return Response(print(self.head))
        # sp.parse_response_code()
