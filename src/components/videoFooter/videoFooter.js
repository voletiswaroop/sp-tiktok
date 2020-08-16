import React, { Component } from 'react'
import './videoFooter.css'

export default class videoFooter extends Component {
  render() {
    return (
      <section className="user-track-wrapper">
        <div className="user-track-container">
          <p className="user-info">@swaroopravs</p>
          <p className="video-desc">#dance #slowmotion</p>
          <span className="track-info"><i className="fas fa-music"></i><marquee scrollamount="4" className="track-name">ButtaBomma Buttab... Sound-by SP...</marquee></span>
        </div>
        <i className="fas fa-compact-disc"></i>
      </section>
    )
  }
}
