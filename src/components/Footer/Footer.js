import React, { Component } from 'react'
import './footer.css'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <span>
          <i class="fas fa-home"></i>Home</span>
        <span><i class="fas fa-search"></i>Discover</span>
        <span>
          <div class="tooltip"><i class="fas fa-plus-square"></i> <span class="tooltiptext">Tap to create your video</span></div>
        </span>
        <span> <i class="fas fa-inbox"></i>Inbox </span>
        <span><i class="fas fa-user"></i>Me</span>
      </footer>
    )
  }
}
