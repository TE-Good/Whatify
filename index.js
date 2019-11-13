const express = require('express')
const app = express()
const port = 4000
const axios = require('axios')

const clientId = 'af12ae61b9ee42db83fc4b445ff51b0a'
const clientSecret = '2cdbd2a51d484321a5095cb2b9041b4d'
const redirectUri = 'http://localhost:4000/callback'
const scopes = ['user-read-private', 'user-read-email']

const SpotifyWebApi = require('spotify-web-api-node')

const spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  clientSecret: clientSecret,
  redirectUri: redirectUri
})

const authorizeURL = spotifyApi.createAuthorizeURL(scopes)

console.log(authorizeURL)

app.get('/api/authorize', (req, res) => {
  res.json(authorizeURL)
})

app.get('/callback', (req, res) => {
  console.log('success')
  console.log(req.url)
  res.redirect('http://localhost:8000')
})

// spotifyApi.setAccessToken('<my_access_token>')
// app.get('/api/authorize', (req, res) => {
//   axios.get(`http://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}`)
//     .then(response => res.json(response.data))
//     .catch(err => res.json(err))
// })


app.listen(port, () => console.log(`Receiving on port ${port}`))

