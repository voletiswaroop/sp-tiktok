import React, { Component } from 'react'
import './videoMoreInfo.css'
import ProfilePic from '../../assets/images/profile.png'
import CommentSection from '../comments/comments'
import NonLoggedInUserProfile from '../nonLoggedInUserProfile/nonLoggedInUserProfile'

export default class videoMoreInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: 1520
    }
  }

  getClicks() {
    if (document.getElementsByClassName('fa-heart')[0].classList.contains('liked')) {
      this.setState((prevState) => { return { likes: prevState.likes - 1 }; });
      document.getElementsByClassName('fa-heart')[0].classList.remove('liked')
    } else {
      this.setState((prevState) => { return { likes: prevState.likes + 1 }; });
      document.getElementsByClassName('fa-heart')[0].classList.add('liked')
    }
  }
  toggleUserProfile(event) {
    event.currentTarget.closest('.tiktok-moreinfo').nextSibling.nextSibling.classList.add('show-user-profile')
  }
  toggleComments(event) {
    event.currentTarget.closest('.tiktok-moreinfo').nextSibling.classList.add('active-comments-widget')
  }

  render() {
    return (
      <aside className="tiktok-moreinfo-wrapper">
        <div className="tiktok-moreinfo">
          <span className="profile" onClick={(event) => this.toggleUserProfile(event)}>
            <img className="profilepic" src={ProfilePic} alt="User profile picture" />
            <i className="fas fa-plus-circle"></i>
          </span>
          <span className="likes" onClick={() => this.getClicks()}><i className="fas fa-heart"></i>{this.state.likes}</span>
          <span className="comments" onClick={(event) => this.toggleComments(event)}><i className="fas fa-comment-dots"></i>21</span>
          <span className="share"><i className="fas fa-share"></i>21</span>
        </div>
        <CommentSection />
        <NonLoggedInUserProfile />
        <div className="share-wrapper"></div>
      </aside>
    )
  }
}
