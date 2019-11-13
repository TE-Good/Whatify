import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends React.Component{
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
      <form onSubmit={this.handleSubmit}>
        <h3>Authorize</h3>
        <button>Submit</button>

      </form>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)