import React from 'react'
import axios from 'axios'

export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      homeState: '' // '' or 'login'
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleSubmit(e) {
    e.preventDefault()
    console.log('submitted')
    this.setState({ homeState: 'login' })
    setTimeout(() => {
      axios.get('/api/login')
        .then(res => {
          console.log(res.data)
          window.location.assign(res.data)
        })
    }, 500)
  }

  render() {
    return (
      <>
        <div className='bg-image'>
          <div className='fp-wrapper'>
            <div className='fp-header'>
              <h1>WHATIFY?</h1>
              <h2> Your Personal Music Quiz </h2>
            </div>
            <div className='fp-login' onClick={this.handleSubmit}>
            </div>
          </div>
        </div>


        {/* <div className='fp-login' onClick={this.handleSubmit}>
        <h5> Connect To Spotify To Start </h5>
      </div>
      <div className='fp-login2' onClick={this.handleSubmit}>
        <h5>WHATIFY</h5>
        <h5> Your Personal Music Quiz </h5>
      </div>
        <div className='fullBleed'>
          <div className=''>
            <img className='fpBack' src='https://images.unsplash.com/photo-1459233313842-cd392ee2c388?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80'></img>
          </div>
        </div> */}
      </>
    )
  }
}