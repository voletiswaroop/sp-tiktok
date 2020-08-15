import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <header>
        <span>Following |</span> <span className="active"> For You</span>
      </header>
    )
  }
}
