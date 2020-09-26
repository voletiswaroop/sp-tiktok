import React, { Component } from 'react'
import './loggedInUserProfile.css'
import ProfilePic from '../../assets/images/profile.png'
import Tabs from '../Tabs/Tabs'
import Panel from '../Tabs/Panel'

export default class loggedInUserProfile extends Component {
  render() {
    return (
      <section className="loggedinuser-profile-wrapper">
        <div className="header">
          <i className="fas fa-user-plus"></i>
          <p className="user-name">Swaroop Gupta Voleti<i className="fas fa-caret-down"></i></p>
          <i className="fas fa-ellipsis-v"></i>
        </div>
        <div className="user-details">
          <img src={ProfilePic} alt="Swaroop gupta voleti" />
          <p className="user-info">@swaroopravs</p>
          <p className="user-videos-count">21 Video</p>
          <div className="profile-followers-details">
            <p className="user-following">
              <span className="count">20</span> Following</p>
            <p className="user-followers"><span className="count">1512</span> Followers</p>
            <p className="user-total-likes"><span className="count">1520</span> Likes</p>
          </div>
          <div className="profile-settings">
            <div className="edit-profile">Edit profile</div>
            <i className="far fa-bookmark"></i>
          </div>
        </div>
        <div className="user-video-gallery">
          <Tabs selected={0}>
            <Panel dataIcon="fas fa-photo-video" title="">Videos Gallery</Panel>
            <Panel dataIcon="far fa-kiss-wink-heart" title="">Liked Videos</Panel>
          </Tabs>
        </div>
      </section>
    )
  }
}
