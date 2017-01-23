import React from 'react'
import { browserHistory } from 'react-router'

export default class About extends React.Component {
  static getInitialProps ({query, params}) {
    return new Promise(resolve => setTimeout(resolve, 2000))
  }

  render() {
    return (
      <div>
        <h1>About Page</h1>
        <button onClick={() => browserHistory.goBack()}>Back</button>
      </div>
    )
  }
}
