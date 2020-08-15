import React, { Component } from 'react'
import './footer.css'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <span>
          <i className="fas fa-home"></i>Home</span>
        <span><i className="fas fa-search"></i>Discover</span>
        <span>
          <div className="tooltip"><i className="fas fa-plus-square"></i> <span className="tooltiptext">Tap to create your video</span></div>
        </span>
        <span> <i className="fas fa-inbox"></i>Inbox </span>
        <span><i className="fas fa-user"></i>Me</span>
      </footer>
    )
  }
}
