import React, { Component } from 'react'
import './videoMoreInfo.css'
import ProfilePic from '../../assets/images/profile.png'
import CommentSection from '../comments/comments'

export default class videoMoreInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: 1520
    }
  }
  getClicks() {
    if (document.getElementsByClassName('fa-heart')[0].classList.contains('liked')) {
      this.setState({ likes: this.state.likes - 1 })
      document.getElementsByClassName('fa-heart')[0].classList.remove('liked')
    } else {
      this.setState({ likes: this.state.likes + 1 })
      document.getElementsByClassName('fa-heart')[0].classList.add('liked')
    }
  }
  render() {
    return (
      <aside className="tiktok-moreinfo-wrapper">
        <div className="tiktok-moreinfo">
          <span className="profile">
            <img className="profilepic" src={ProfilePic} alt="User profile picture" />
            <i className="fas fa-plus-circle"></i>
          </span>
          <span className="likes"><i className="fas fa-heart" onClick={() => this.getClicks()}></i>{this.state.likes}</span>
          <span className="comments"><i className="fas fa-comment-dots"></i>20</span>
          <span className="share"><i className="fas fa-share"></i>21</span>
        </div>
        <CommentSection />
        <div className="share-wrapper"></div>
      </aside>
    )
  }
}
