import React, {PureComponent} from 'react'
import { Link } from 'react-router'

export default class About extends PureComponent {
  static async getInitialProps() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({mydata: 'Reunify!'})
      }, 2000)
    })
  }

  render() {
    return (
      <div>
        <h1>About Page</h1>
        <h2>Data: { this.props.mydata }</h2>
        <ul>
          <li><Link to={'/'}>Client-Side Back Link</Link></li>
          <li><a href="/">Server-Server Back Link</a></li>
        </ul>
      </div>
    )
  }
}