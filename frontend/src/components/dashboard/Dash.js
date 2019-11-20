import React from 'react'
import axios from 'axios'

export default class Dash extends React.Component {
  constructor() {
    super()
    this.play = this.play.bind(this)
    this.state = {
      username: {} ,
      dashState: '', // '' or ready
      user: {
      }
    }  
    this.leader = this.leader.bind(this) 
  }

  componentDidMount() {
    setTimeout(() => {
      axios.get('api/retrieve')
        .then(res => this.setState({ username: { username: res.data } }))
    }, 2000)
    setTimeout(() => this.setState({ dashState: 'ready' }), 3000)
    setTimeout(() => {
      axios.get('/api/db/user')
        .then(res => this.setState({ user: res.data.filter(user => user.username === this.state.username.username).pop() }))
        .then(() => this.setState({ user: { ...this.state.user, displayname: String(this.state.user.displayname.split(' ')[0]) } }), 4500)
    }, 4000)
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
  leader(e){
    e.preventDefault()
    this.props.history.push('/leaderboard')
  }

  render() {
    console.log(this.state)
    if (!this.state.user) return null
    return (

      <div className='fullBleed dash animated fadeIn slow'>

        <div>{this.state.dashState !== 'ready' ? <center><img src='https://i.imgur.com/s2jF9xM.gif'></img><h2>Loading dashboard...</h2></center> : <img className='animated fadeOut' src=''></img>}</div>
        <div className='fp-wrapper'>
          <div className='fp-panes'>
            <div className='dash-header '>
              <h1 className={this.state.user.username ? 'animated fadeIn' : 'hidden'}>{this.state.user.username ? `Welcome, ${this.state.user.displayname}.` : ''}</h1>
              {/* <h2 className={this.state.user.username ? 'h22 animated fadeIn' : 'hidden'}>{this.state.user.username ? `Current Top Score: ${this.state.user.score}.` : '' }</h2> */}
              <h2 className={this.state.user.username ? 'h22 animated fadeIn' : 'hidden'}>{this.state.user.username ? 'How well do you you know your music?' : ''}</h2>
            </div>
            <div className={this.state.user.username ? 'dashRight fadeIn' : 'hidden'}>
              {/* <button className='dashButtons animated fadeIn delay-3s' onClick={null}>Leaderboard</button> */}
              <button className='dashButtons animated fadeIn delay-1s' onClick={this.play}>Play</button>
              <button className='dashButtons animated fadeIn delay-1s' onClick={this.leader}>Leaderboard</button>
              <button className='dashButtons animated fadeIn delay-1s' onClick={this.logout}>Log out</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}