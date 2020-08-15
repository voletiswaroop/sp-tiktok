import React, { Component } from 'react'
import './video.css'
import MediaOne from '../../assets/images/1.jpg'
import MediaTwo from '../../assets/images/2.jpg'
import VideoMoreInfo from '../videoMoreInfo/videoMoreInfo'
import VideoFooter from '../videoFooter/videoFooter'
import Footer from '../Footer/Footer'

export default class video extends Component {

  componentDidMount() {
    let scrollPosition = 0;
    window.addEventListener("scroll", function () {
      let scrollDirection = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollDirection > scrollPosition) {
        if (scrollPosition > window.innerHeight / 2) {
          window.scrollTo(0, window.innerHeight)
        }
      } else {
        if (scrollPosition < window.innerHeight / 2) {
          window.scrollTo(0, 0)
        }
      }
      scrollPosition = scrollDirection <= 0 ? 0 : scrollDirection;
    }, false);
  }

  render() {
    return (
      <main className="tiktok-player-wrapper">
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
        <Footer />
      </main>
    )
  }
}
