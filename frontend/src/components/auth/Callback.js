import React from 'react'
import axios from 'axios'

export default class Callback extends React.Component {
  constructor() {
    super()

  }
  componentDidMount() {
    const object = this.props.location.search.replace('?code=','')
    // const object = this.props.location.search
    // const sendBack = { 'code': `${object}` }
    const sendBack = object
    console.log(object)
    axios.post('/api/callback', sendBack)
      .then(res => console.log('sent to the backend:',res.config.data))
  }


  render() {
    return (
      <div>
        something happened
      </div>
    )
  }

}
