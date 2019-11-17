import React from 'react'
import axios from 'axios'

export default class Dash extends React.Component {
  constructor() {
    super()
    this.play = this.play.bind(this)
    this.state = {
      user: {

      }
    }
    
  }

  componentDidMount() {
    setTimeout(() => {
      axios.get('api/retrieve')
        .then(res => this.setState({ user: res.data }))
    }, 500)
  }


  logout(e){
    e.preventDefault()
    const url = 'https://accounts.spotify.com/en/logout'
    const spotifyLogoutWindow = window.open(url, 'Spotify Logout', 'width=600,height=400,top=50,left=50')
    setTimeout(() => spotifyLogoutWindow.close(), 3000)
    window.location.assign('/')
  }
  play(e){
    e.preventDefault()
    this.props.history.push('/play')
  }

  render() {
    if (!this.state) return null
    return (
      <div>
        Welcome back, {this.state.user.username}!
        <form onSubmit={this.logout}>
          <button type='submit'>Log out</button>
        </form>
        <form onSubmit={this.play}>
          <button type='submit'>Play</button>
        </form>
      </div>
    )
  }
}