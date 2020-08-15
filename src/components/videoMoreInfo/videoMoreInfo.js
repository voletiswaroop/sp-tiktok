import React, { Component } from 'react'
import './videoMoreInfo.css'
import ProfilePic from '../../assets/images/profile.png'

export default class videoMoreInfo extends Component {
  render() {
    return (
      <aside className="tiktok-moreinfo">
        <span className="profile">
          <img className="profilepic" src={ProfilePic} alt="User profile picture" />
          <i className="fas fa-plus-circle"></i></span>
        <span className="likes"><i className="fas fa-heart"></i>1520</span>
        <span className="comments"><i className="fas fa-comment-dots"></i>20</span>
        <span className="share"><i className="fas fa-share"></i>21</span>
      </aside>
    )
  }
}
