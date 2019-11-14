import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'
import Callback from './components/auth/Callback'

import 'normalize.css'
import './style.scss'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/dashboard' component={Callback}/>
      <Route exact path='/' component={Home}/>
      <Route exact path='' component={Home} />

    </Switch>
  </BrowserRouter>
)


ReactDOM.render(
  <App />,
  document.getElementById('root')
)