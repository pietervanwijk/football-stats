import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
  constructor () {
    super() 
    this.state = {
      goals: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (playerName) {
     console.log('function triggered') 
     axios.get('https://allsportsapi.com/api/football/?&met=Players&playerName=' + playerName + '&APIkey=e6e3c355d8b146f84649ed5e91596f1e52c3f0da08b507637b8ff71204a5ab59')
    .then(response => this.setState({goals: response.data.result[0].player_goals}))
  }

  render () {
    return (
      <div>
        <div>
          <h1>Goals {this.state.goals}</h1>
        </div>
        <div className='button__container'>
          <button className='button' onClick={() => this.handleClick('van persie robin')}>Robin van Persie</button>
        </div>
        <div className='button__container'>
          <button className='button' onClick={() => this.handleClick('toornstra jens')}>Jens Toornstra</button>
        </div>
      </div>
    )
  }
}
export default App