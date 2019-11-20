import React from 'react'
import axios from 'axios'


export default class Leaderboard extends React.Component {
  constructor() {
    super()
    this.state = {
      scores: []
    }

    this.handleBack = this.handleBack.bind(this)
  }
  componentDidMount(){
    axios.get('/api/db/user')
      .then(res => {
        const list = res.data.sort((a, b) => (a.score < b.score) ? 1 : -1)
        this.setState({ scores: list })
      })
  }
  handleBack(e) {
    e.preventDefault()
    this.props.history.push('/dash')
  }


  render() {
    if (!this.state.scores) return null
    console.log(this.state)
    return (
      <div className='bg-image'>
        <button className='dashButtons' onClick={this.handleBack}>Back</button>
        <div className='stage middle'>

          <div className='stagingArea overScroll'>
            {this.state.scores.map((user, i) => (
              <div className='leaderCard' key={i}>

                <img className='leaderImg' src={user.image}></img>
                <div className='middle'>
                  {/* <em>{i + 1} : </em> */}
                  <em>{user.displayname} : {user.score}</em>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    )
  }
}