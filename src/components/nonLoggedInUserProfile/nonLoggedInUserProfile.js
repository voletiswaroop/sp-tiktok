import React, { Component } from 'react'
import './nonLoggedInUserProfile.css'
import ProfilePic from '../../assets/images/profile.png'
import Tabs from '../Tabs/Tabs'
import Panel from '../Tabs/Panel'

export default class nonLoggedInUserProfile extends Component {
  toggleUserProfile(event) {
    event.currentTarget.closest('.nonloggedinuser-profile-wrapper').classList.remove('show-user-profile')
  }
  render() {
    return (
      <section className="nonloggedinuser-profile-wrapper">
        <div className="header">
          <i className="fas fa-chevron-left" onClick={(e) => this.toggleUserProfile(e)}></i>
          <p className="user-name">Swaroop Gupta Voleti</p>
          <i className="fas fa-ellipsis-h"></i>
        </div>
        <div className="user-details">
          <img src={ProfilePic} alt="Swaroop gupta voleti" />
          <p className="user-info">@swaroopravs</p>
          <p className="user-videos-count"><i className="fas fa-check-circle"></i>popular creator</p>
          <div className="profile-followers-details">
            <p className="user-following">
              <span className="count">20</span> Following</p>
            <p className="user-followers"><span className="count">15.12m</span> Followers</p>
            <p className="user-total-likes"><span className="count">15.20m</span> Likes</p>
          </div>
          <div className="profile-settings">
            <div className="edit-profile">Message</div>
            <i className="far fa-bookmark"></i>
            <i className="fas fa-user-check"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
          </div>
          <div className="about-user">
            Traveller <i className="fas fa-plane-departure"></i> visit my <a href="https://voletiswaroop.github.io/">portfolio</a>
          </div>
        </div>
        <div className="user-video-gallery">
          <Tabs selected={0}>
            <Panel dataIcon="fas fa-photo-video" title="">Videos Gallery</Panel>
            <Panel dataIcon="far fa-kiss-wink-heart" title="">Liked Videos</Panel>
          </Tabs>
        </div>
      </section >
    )
  }
}
