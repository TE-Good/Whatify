import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'
import Callback from './components/auth/Callback'
import Dash from './components/dashboard/Dash'
import Play from './components/common/Game'
import Leaderboard from './components/common/Leaderboard'

import 'normalize.css'
import './style.scss'
import 'animate.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/leaderboard' component={Leaderboard}/>
      <Route path='/play' component={Play}/>
      <Route exact path='/dashboard' component={Callback}/>
      <Route exact path='/dash' component={Dash}/>
      <Route exact path='/' component={Home}/>
      <Route exact path='' component={Home} />

    </Switch>
  </BrowserRouter>
)


ReactDOM.render(
  <App />,
  document.getElementById('root')
)