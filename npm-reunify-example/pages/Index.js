import React from 'react'
import { Link } from 'react-router'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>Index Page</h1>
        <ul>
          <li><Link to={'/about'}>Client-Side Link</Link></li>
        </ul>
        <ul>
          <li><a href="/about">Server-Side Link (2s delay)</a></li>
        </ul>
      </div>
    )
  }
}
