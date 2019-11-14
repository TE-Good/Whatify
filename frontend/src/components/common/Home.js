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
      <div className='fp-login'>
        <form onSubmit={this.handleSubmit} className='container'>
          <h3>Log in to play!</h3>
          <button>Log in</button>
        </form>
      </div>
    )
  }
}