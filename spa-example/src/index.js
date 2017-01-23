import 'whatwg-fetch'
import React from 'react'
import {render} from 'react-dom'
import { Router, Route, browserHistory, Redirect } from 'react-router'
import App from './components/App'

render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Redirect from="*" to="/" />
  </Router>, document.getElementById('app'))
