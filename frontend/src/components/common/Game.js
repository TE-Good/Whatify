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
      ]
    }
    this.collections =
      [
        {
          track_id: '1HiaZTm2nGQL4wtnJLPNV0',
          track_name: 'Street Player - 2003 Remaster',
          track_artist: 'Chicago',
          track_preview: 'https://p.scdn.co/mp3-preview/736a4e877b104894de0fb3963e1b26373eecd2f1?cid=af12ae61b9ee42db83fc4b445ff51b0a',
          track_in_album: 'Chicago 13 (Expanded & Remastered)',
          track_album_art: 'https://i.scdn.co/image/ab67616d0000b2735aad49c2c9e815064b448af3'
        },
        {
          track_id: '52bpTnhwrv0ly6Py4uzDon',
          track_name: 'Charlie Sheen vs. Henry Rollins',
          track_artist: 'Various Artists',
          track_preview: 'https://p.scdn.co/mp3-preview/1543df6fb9d5e822d73fc995270bb1f615fd9251?cid=af12ae61b9ee42db83fc4b445ff51b0a',
          track_in_album: 'The Switcheroo Series',
          track_album_art: 'https://i.scdn.co/image/ab67616d0000b2735d78f381fa21ecb0e10a9226'
        },
        {
          track_id: '4u9f8hqstB7iITDJNzKhQx',
          track_name: 'My Generation - Stereo Version',
          track_artist: 'The Who',
          track_preview: 'https://p.scdn.co/mp3-preview/190ce50d7bc21852d7b0545efa58f48fd88ddfc2?cid=af12ae61b9ee42db83fc4b445ff51b0a',
          track_in_album: 'My Generation',
          track_album_art: 'https://i.scdn.co/image/ab67616d0000b2736fda800d179e37c25646ca61'
        },
        {
          track_id: '4J7GZ0QWuLsbL94nNZyn7S',
          track_name: 'Husk',
          track_artist: 'Black Foxxes',
          track_preview: 'https://p.scdn.co/mp3-preview/705fcd0804c738c9f8a908f0253d9637d68a41bb?cid=af12ae61b9ee42db83fc4b445ff51b0a',
          track_in_album: 'I\'m Not Well',
          track_album_art: 'https://i.scdn.co/image/15d956246738653e20fd05ca732b33ea54ec62e9'
        },
        {
          track_id: '20DcrlNK0NcRknbX4wcEO4',
          track_name: 'Luchini AKA This Is It',
          track_artist: 'Camp Lo',
          track_preview: 'https://p.scdn.co/mp3-preview/1cfb0cb176d4459860bd7c84b1a39d9c36a0b771?cid=af12ae61b9ee42db83fc4b445ff51b0a',
          track_in_album: 'Uptown Saturday Night',
          track_album_art: 'https://i.scdn.co/image/ab67616d0000b27327608b688554d3cf9b4492ef'
        },
        {
          track_id: '0LYoVYuXzcfykyVzaydE9D',
          track_name: 'Summer of Luv',
          track_artist: 'Fizzy Blood',
          track_preview: 'https://p.scdn.co/mp3-preview/5c734567eaac9e90034f9448aacc2a5c8ff80c03?cid=af12ae61b9ee42db83fc4b445ff51b0a',
          track_in_album: 'Summer Of Luv',
          track_album_art: 'https://i.scdn.co/image/ab67616d0000b273461ecebc2f33b4f82ca69e92'
        },
        {
          track_id: '70XfsHxO5SgL4ecXDvG0Np',
          track_name: 'What You Need',
          track_artist: 'Yung Bae',
          track_preview: 'https://p.scdn.co/mp3-preview/4969b5806a3c1773c496f8731b3fdd5484f76fac?cid=af12ae61b9ee42db83fc4b445ff51b0a',
          track_in_album: 'Bae 5',
          track_album_art: 'https://i.scdn.co/image/ab67616d0000b273c8954d7d5c9deb29f1f77b08'
        },
        {
          track_id: '37tqP5tmzFPFbr4Lf0I9zL',
          track_name: 'Grange',
          track_artist: 'Hockey Dad',
          track_preview: 'https://p.scdn.co/mp3-preview/41fe4ab740ac1cf9f13d40851467084af86a4944?cid=af12ae61b9ee42db83fc4b445ff51b0a',
          track_in_album: 'Boronia',
          track_album_art: 'https://i.scdn.co/image/ab67616d0000b2731923485e78ab87ce9dd916c0'
        },
        {
          track_id: '0DGzkmXGT5jrqSjaJ1EyL2',
          track_name: 'Kaleidoscope',
          track_artist: 'Delta Heavy',
          track_preview: 'https://p.scdn.co/mp3-preview/ea686c49bb5942a456b9110883a3113228af764a?cid=af12ae61b9ee42db83fc4b445ff51b0a',
          track_in_album: 'Kaleidoscope',
          track_album_art: 'https://i.scdn.co/image/ab67616d0000b273853db20970a43adfa773ede1'
        },
        {
          track_id: '1Op47dMLD73On4rNNNU3AW',
          track_name: 'Main Theme of Final Fantasy VII (Final Fantasy VII)',
          track_artist: 'Nobuo Uematsu',
          track_preview: 'https://p.scdn.co/mp3-preview/6862046b2d377678cd847dc8ba5df9cb433462a5?cid=af12ae61b9ee42db83fc4b445ff51b0a',
          track_in_album: 'Distant Worlds II: More Music from Final Fantasy',
          track_album_art: 'https://i.scdn.co/image/ab67616d0000b273004673484553b6077815df6c'
        },
        {
          track_id: '0yeKU96NXwAvJSU4hWzxAv',
          track_name: 'The Warmth',
          track_artist: 'Fat Night',
          track_preview: 'https://p.scdn.co/mp3-preview/8d980d3d45010cc8eb60dc853810eb0e97c950d7?cid=af12ae61b9ee42db83fc4b445ff51b0a',
          track_in_album: 'Fat Night',
          track_album_art: 'https://i.scdn.co/image/ab67616d0000b273bf71d69cb7a92aed5cedc013'
        },
        {
          track_id: '3A6e9UyMSrVRc2i9TqVGep',
          track_name: 'Inspire',
          track_artist: 'Above & Beyond',
          track_preview: 'https://p.scdn.co/mp3-preview/1917ee859c7ba9690fc47865264fdafac4538078?cid=af12ae61b9ee42db83fc4b445ff51b0a',
          track_in_album: 'Anjunabeats Volume 13',
          track_album_art: 'https://i.scdn.co/image/ab67616d0000b2732558ea897478ce2c3710d319'
        },
        {
          track_id: '4EyPadLFhtWojU7mkT5hqT',
          track_name: 'Avalanche',
          track_artist: 'Bring Me The Horizon',
          track_preview: 'https://p.scdn.co/mp3-preview/75ae197055535c2489b7e46a139ffc42c123e0ec?cid=af12ae61b9ee42db83fc4b445ff51b0a',
          track_in_album: 'That\'s The Spirit', // look into apsrophieshasdasdafg
          track_album_art: 'https://i.scdn.co/image/ab67616d0000b273736145b97bab8fa92cb6113f'
        }
      ]

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
    const tracksInPlay = []
    for (let i = 0; i < this.gameLength; i++) {
      tracksInPlay.push(this.collections[[(Math.ceil(Math.random() * Math.ceil(this.collections.length - 1)))]])
    }
    this.setState({ gameData: [...this.state.gameData, ...tracksInPlay] })
    this.startRound()
  }

  handleAnswers() {
    this.answers = this.answers.map(() => (
      this.collections[(Math.ceil(Math.random() * Math.ceil(this.collections.length - 1)))].track_name)
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
