import React, { Component } from 'react'
import './videoFooter.css'

export default class videoFooter extends Component {
  render() {
    return (
      <footer className="tiktok-footer">
        <div className="user-track-wrapper">
          <p className="user-info">@swaroopravs</p>
          <span className="track-info"><i className="fas fa-music"></i><marquee scrollamount="4" className="track-name">ButtaBomma Buttab... Sound-by SP...</marquee></span>
        </div>
        <i className="fas fa-compact-disc"></i>
      </footer>
    )
  }
}
