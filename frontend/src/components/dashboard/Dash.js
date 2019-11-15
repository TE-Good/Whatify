import React from 'react'
import axios from 'axios'

export default class Dash extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {
        display_name: ''

      }
    }
  }

  componentDidMount() {
    setTimeout(() => {
      axios.get('api/retrieve')
        .then(res => this.setState({ user: res.data }))
    }, 1000)
  }

  logout(e){
    e.preventDefault()
    window.open('https://accounts.spotify.com/en/logout', 'Spotify Logout', 'width=600,height=400,top=50,left=50')
    window.location.assign('/')
  }

  render() {
    if (!this.state) return null
    return (
      <div>
        Welcome back, {this.state.user.display_name}!
        <form onSubmit={this.logout}>
          <button type='submit'>Log out</button>
        </form>
      </div>
    )
  }
}