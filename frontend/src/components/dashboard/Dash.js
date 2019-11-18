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
    axios.get('api/retrieve')
      .then(res => this.setState({ user: { username: res.data } }))
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
    console.log(this.state)
    if (!this.state) return null
    return (
      <div className='fullBleed dash'>
        <h1 className='animated fadeIn delay-2s'>{this.state.user.username ? `Welcome, ${this.state.user.username}.` : '' }</h1>
        <h2 className='h22 animated fadeIn delay-2s'>{this.state.user.username ? `Current Top Score: ${this.state.user.score}.` : '' }</h2>

        
        <div className={this.state.user.username ? 'dashRight slow fadeIn' : 'hidden'}>
          <button className='choiceButtons animated fadeIn delay-3s' onClick={null}>Leaderboard</button>
          <button className='choiceButtons animated fadeIn delay-2s' onClick={this.play}>Play</button>
          <button className='choiceButtons animated fadeIn delay-1s' onClick={this.logout}>Log out</button>


        </div>



      </div>
    )
  }
}