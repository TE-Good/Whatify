import React from 'react'
import axios from 'axios'

export default class Game extends React.Component {
  constructor() {
    super()
    this.state = {
      score: 0,
      width: 100,
      time: 30000,
      gameState: 'start',
      username: 'nuclearsheep',
      gameData: [
        { //empty index [0] prevents audio from starting as iframe will auto load data in state
          //game starts on index [1]. To have game auto play, delete this empty object
          track_id: '',
          track_name: '',
          track_artist: '',
          track_preview: '',
          track_in_album: '',
          track_album_art: ''
        }
      ],
      collections: []
    }

    this.round = 0
    this.levelData = this.state.gameData[this.round]
    this.time = 30000
    this.answers = ['a', 'b', 'c', 'd']

    this.startRound = this.startRound.bind(this)
    this.nextRound = this.nextRound.bind(this)
    this.countdownTimer = this.countdownTimer.bind(this)
    this.startRound = this.startRound.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.handleChoice = this.handleChoice.bind(this)
    this.startGame = this.startGame.bind(this)
    this.timer = null
    this.result = null
    this.gameLength = 10
    //gamestate is either start, play or end
  }

  componentDidMount() {
    axios.get('api/retrieve')
      .then(res => this.setState({ username: res.data }))
      .then(() => this.secondMount())
  }

  secondMount() {
    axios.get('api/usersongs')
      .then(res => {
        const data = res.data
        console.log(data)
        const newdata = data.filter(song => song.owner === this.state.username)
        console.log(newdata)
        this.setState({ collections: newdata })
      })
      .then(() => {
        const tracksInPlay = []
        for (let i = 0; i < this.gameLength; i++) {
          tracksInPlay.push(this.state.collections[[(Math.ceil(Math.random() * Math.ceil(this.state.collections.length - 1)))]])
        }
        this.setState({ gameData: [...this.state.gameData, ...tracksInPlay] })
        this.startRound()
      })
  }

  handleAnswers() {
    this.answers = this.answers.map(() => (
      this.state.collections[(Math.ceil(Math.random() * Math.ceil(this.state.collections.length - 1)))].track_name)
    )
    if (!this.answers.includes(this.state.gameData[this.round].track_name)) {
      this.answers[(Math.ceil(Math.random() * Math.ceil(this.answers.length - 1)))] = this.state.gameData[this.round].track_name
    } else {
      console.log('the answer is here')
    }
  }

  startRound(n) {
    clearInterval(this.timer)
    console.log('Update recieved, updating data to round ', n)
    // this.setState(this.levelData = this.state.gameData[n])
    //asign this.questions with random data from whatifydb, populating this level data trackname in one of them first
  }

  startGame() {
    this.setState({ gameState: 'play' })
    console.log(this.gameState)
    this.nextRound()
    this.handleAnswers()
  }

  countdownTimer() {
    this.timer = setInterval(() => {
      const time = this.state.time - 200
      const width = Number(this.state.width - 0.68)
      this.setState({ time })
      this.points > 1 ? this.points = this.points - 2 : this.points = 0
      this.setState({ width })
    }, 200)
  }

  nextRound() {
    if (this.round === this.gameLength) {
      console.log('finished game')
      return console.log(this.state.score)
    }
    this.setState({ width: 100 })
    this.points = 300
    this.setState({ time: 30000 })
    this.round = this.round + 1
    console.log('Updating round to level', this.round)
    this.handleAnswers()
    setTimeout(() => {
      this.startRound(this.round)
      this.countdownTimer()
    }, 100)

    return this.setState({ gameState: 'play' })
  }

  handleChoice(e) {
    console.log(e.target.name)
    if (e.target.name !== this.state.gameData[this.round].track_name) {
      clearInterval(this.timer)
      this.result = false
    } else {
      clearInterval(this.timer)
      const score = this.state.score + this.points
      this.setState({ score })
      this.result = true
    }
    return this.setState({ gameState: 'end' })
  }

  render() {
    console.log(this.state)
    var progbar = {
      width: this.state.width + 'vw'
    }
    if (!this.state.gameData) return null
    return (
      <>
        <div className='hidden'> {/* div where the music plays */}
          <iframe src={this.state.gameData[this.round].track_preview} allow='autoplay' id='player' />
        </div>

        <div className={`${this.state.gameState !== 'start' ? '' : 'hidden'}`}> {/* this is the cowndown timer */}
          <div className='countDownEmpty'></div>
          <div className='countDown' style={progbar}></div>
        </div>


        <div className={`${this.state.gameState === 'start' ? 'startScreen' : 'hidden'}`}>
          <button  className='choiceButtons' onClick={this.startGame} value='1' >Play Game</button>
        </div>



        <div className={`${this.state.gameState === 'play' ? 'stage' : 'hidden'}`}>
          <div>{!this.round ? <h2 className='' id='r2p'>Get Ready To Play!</h2> : <h2>Round {this.round}</h2>}
            <h3>Score: {this.state.score}</h3>
          </div>

          <div className='stagingArea'>
            <div className='questions'>
              <h3></h3>
              <h3>Whats the name of this track?</h3>
              {/* map this.questions as this.questions populate on each round start */}
              <div className='choices'>
                {/*button on click function that checks the button.event.value to the levelData.track_name if != then wrong, if == TRUE then correct, then run next round*/}
                {this.answers.map((choice, i) => <button key={i} className='choiceButtons' name={choice} onClick={this.handleChoice}>{choice}</button>)}
              </div>
            </div> {/* end of questions */}
          </div> {/* end of stagingArea */}
        </div> {/* end of stage */}


        <div className={`${this.state.gameState === 'end' ? 'stage' : 'hidden'}`}>
          <h2>Round {this.round}</h2>
          {this.result ? <h3>Correct!</h3> : <h3>Wrong!</h3>}
          {this.round ? <div className='endRound'>

            
            <h4>+{this.result ? this.points : 0} points</h4>
            <div className='flex-row'>
              <img className='roundImg' src={this.state.gameData[this.round].track_album_art}></img>
              <div className='flex-right'>
                <p>Track: {this.state.gameData[this.round].track_name}</p>
                <p>Artist: {this.state.gameData[this.round].track_artist}</p>
                <p>From The Album: {this.state.gameData[this.round].track_in_album}</p>
                <br />
                <p>You guessed this track in {parseFloat(30 - this.state.time / 1000).toFixed(2)} seconds!</p>
              </div>
            </div>
          </div> : null
          }
          <button className='choiceButtons' onClick={this.nextRound} value='1'>{this.round === 10 ? 'end game' : 'next round'}</button>
        </div>
      </>
    )
  }
}
