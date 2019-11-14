import React from 'react'
import axios from 'axios'

export default class Dash extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {

      }
    }
  }
  componentDidMount() {
    setTimeout(() => {
      axios.get('api/retrieve')
        .then(res => this.setState({ user: res.data }))
    }, 1000)
  }


  render() {
    if (!this.state) return null
    return (
      <div>
        hey {this.state.user.display_name} you logged in!
      </div>
    )
  }
}
