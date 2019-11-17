import React from 'react'
import axios from 'axios'

export default class Game extends React.Component {
  constructor() {
    super()

    this.state = {
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
        }
      ]
    }
    this.answers = ['a','b','c']
    this.collections =
      [
        '3C72RUEhADBUILQOLqeLCJ',
        '2l7QoEjmwRWytehenF998K',
        '2HD2g1syRNaqanstTj8zfJ',
        '52bpTnhwrv0ly6Py4uzDon',
        '1HiaZTm2nGQL4wtnJLPNV0',
        '6WkJ2OK163XXS2oARUC9JM',
        '3yXgttblOo006gd4eGOvw1',
        '4bj8kBVwRflBHq5geJP1wr',
        '1nNIJRkc6dUsjdLs9nk2lH',
        '0LYoVYuXzcfykyVzaydE9D',
        '3B6c6S2aPsIe0T0MIPJ1S8',
        '3jAoLij05OiNndX2XlSRdS',
        '4o6BgsqLIBViaGVbx5rbRk',
        '78NOjcwjSb7qSrPtKUAHiy',
        '3MkuFR7t25mu7Iscp6GGiV',
        '70XfsHxO5SgL4ecXDvG0Np',
        '0lHvi39bBHl8LavwiiqPFw',
        '20DcrlNK0NcRknbX4wcEO4',
        '0qJLaFG3t2oVA0FuZ7USDY',
        '0qRR9d89hIS0MHRkQ0ejxX',
        '7j74lucZ59vqN67Ipe2ZcY',
        '48otelBlQznqDX6Uuio485',
        '37tqP5tmzFPFbr4Lf0I9zL',
        '0VaKMRmF20H5aTJvlUtkac',
        '0DGzkmXGT5jrqSjaJ1EyL2',
        '1Op47dMLD73On4rNNNU3AW',
        '0yeKU96NXwAvJSU4hWzxAv',
        '6Mz4qw8QVzazqS92chhoA9',
        '3fDgxdcf0jeJgGiZJGUmyK',
        '2fVIQFxGHSJHR5RYG4SMpI',
        '4RvWPyQ5RL0ao9LPZeSouE',
        '5gWDF3OWHLMsl8MXbLbIAM',
        '6o0AOlWQHSyto3C4wFeP8m',
        '2K2kw0Uh93x2lc1acNgtHj',
        '2uVC1Ni4QvT5FP0An7v29c',
        '2yZHC4FDcKNcrrDtndtvvG',
        '4FJQgzmWXgmYPvlmi8dg85',
        '4u9f8hqstB7iITDJNzKhQx',
        '5SB73InpxuEQ20qEWhOQFV',
        '3A6e9UyMSrVRc2i9TqVGep',
        '4J7GZ0QWuLsbL94nNZyn7S',
        '4rc2WNOt2w8BHfQjBC8PO0',
        '5Xc74Dn1ZKH6H8XaVGOHXG',
        '12SiwHz7igw7aGAIsIgpKJ',
        '4eoqCp5ErOKlPHDbTzwNt5',
        '4EyPadLFhtWojU7mkT5hqT',
        '4bt7541aCtEPtLa9KpJeBa',
        '4idgNC6Y7rd2XRfzPphIBw',
        '4dxByfgJYleKjkkVWLSEoN',
        '2Vim06YsRb4uJRpbeq6NR6'
      ]

    this.round = 0
    this.levelData = this.state.gameData[this.round]

    this.startRound = this.startRound.bind(this)
    this.nextRound = this.nextRound.bind(this)

  }

  componentDidMount() {
    // axios.get('')
    //load user + collection data from whatifydb
    this.startRound()
  }
  startRound(n) {
    console.log('Update recieved, updating data to round ', n)
    this.setState(this.levelData = this.state.gameData[n])
    //asign this.questions with random data from whatifydb, populating this level data trackname in one of them first

  }
  nextRound() {
    this.round = this.round + 1
    console.log('Updating round to level', this.round)
    this.startRound(this.round)
  }
  handleChoice(e){
    console.log(e.target.name)
  }


  render() {
    if (!this.state) return null
    return (
      <>
        <div>
          <h2 className='' id='r2p'>Get Ready To Play!</h2>
        </div>

        <div className='stage'>
          <div className='hidden'>
            <iframe src={this.levelData.track_preview} allow='autoplay' />
          </div>
          <div className='stagingArea'>
            <div className='questions'>
              <h3>Whats the name of this track?</h3> 
              {/* map this.questions as this.questions populate on each round start */}
              <div className='choices'>
                {/*button on click function that checks the button.event.value to the levelData.track_name if != then wrong, if == TRUE then correct, then run next round*/}
                
                {this.answers.map((choice, i) => <button key={i} name={choice} onClick={this.handleChoice}>{choice}</button>)}
              </div>
                

              
            </div>
            
          </div>
          <button onClick={this.nextRound} value='1' >Next Round</button>
        </div>
        <small className='bottom'>answer = {this.levelData.track_name}</small>
      </>
    )
  }
}