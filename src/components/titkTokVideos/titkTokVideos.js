import React, { Component } from 'react'
import './titkTokVideos.css'
import MediaOne from '../../assets/images/1.jpg'
import MediaTwo from '../../assets/images/2.jpg'
import VideoMoreInfo from '../videoMoreInfo/videoMoreInfo'
import VideoFooter from '../videoFooter/videoFooter'

export default class video extends Component {
  render() {
    return (
      <>
        <header>
          <span>Following |</span> <span className="active"> For You</span>
        </header>
        <section className="tiktok-player-wrapper">
          <div className="media-wrapper">
            <div className="media-container"><img src={MediaOne} /></div>
            <VideoMoreInfo />
            <VideoFooter />
          </div>
          <div className="media-wrapper">
            <div className="media-container"><img src={MediaTwo} /></div>
            <VideoMoreInfo />
            <VideoFooter />
          </div>
        </section>
      </>
    )
  }
}
