import React from 'react'
import axios from 'axios'

export default class Home extends React.Component{
  constructor(){
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleSubmit(e){
    e.preventDefault()
    console.log('submitted')
    axios.get('/api/login')
      .then(res => {
        console.log(res.data)
        window.location.assign(res.data)
      })
  }

  render(){
    return (
      <>
      <div className='fp-login' onClick={this.handleSubmit}>

        <h5> Connect To Spotify To Start </h5>

      </div>

      <div className='fp-login2' onClick={this.handleSubmit}>

        <h5>WHATIFY</h5>
        <h5> Your Personal Music Quiz </h5>

      </div>

        

        <div className='fullBleed'>
          <div className=''>
            {/* <iframe src="https://player.vimeo.com/video/274702970"width="1920" height="1080" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe> */}
            <img className='fpBack' src='https://cdn.dribbble.com/users/1770290/screenshots/6183149/bg_79.gif'></img>
            <img className='fpBack' src='https://cdn.dribbble.com/users/1770290/screenshots/6183149/bg_79.gif'></img>
          </div>
        </div>
      </>
    )
  }
}