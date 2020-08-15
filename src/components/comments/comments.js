import React, { Component } from 'react'
import './comments.css'

export default class comments extends Component {

  toggleComments(event) {
    event.currentTarget.closest('.comments-wrapper').classList.remove('active-comments-widget')
  }

  render() {
    return (
      <section className="comments-wrapper">
        <p className="comments-count">21 comments <i className="fas fa-times close-comments" onClick={(event) => this.toggleComments(event)}></i></p>
        <div className="comments-container">
          <div className="comment-details">
            <i className="fas fa-user-circle"></i>
            <div className="comment-group">
              <p className="user-name">Swaroop</p>
              <p className="user-comment">This made my day. Keep doing!</p>
              <p className="comment-date">2w</p>
            </div>
          </div>
          <div className="comment-details">
            <i className="fas fa-user-circle"></i>
            <div className="comment-group">
              <p className="user-name">Swaroop</p>
              <p className="user-comment">This made my day. Keep doing!</p>
              <p className="comment-date">2w</p>
            </div>
          </div>
          <div className="comment-details">
            <i className="fas fa-user-circle"></i>
            <div className="comment-group">
              <p className="user-name">Swaroop</p>
              <p className="user-comment">This made my day. Keep doing!</p>
              <p className="comment-date">2w</p>
            </div>
          </div>
          <div className="comment-details">
            <i className="fas fa-user-circle"></i>
            <div className="comment-group">
              <p className="user-name">Swaroop</p>
              <p className="user-comment">This made my day. Keep doing!</p>
              <p className="comment-date">2w</p>
            </div>
          </div>
          <div className="comment-details">
            <i className="fas fa-user-circle"></i>
            <div className="comment-group">
              <p className="user-name">Swaroop</p>
              <p className="user-comment">This made my day. Keep doing!</p>
              <p className="comment-date">2w</p>
            </div>
          </div>
          <div className="comment-details">
            <i className="fas fa-user-circle"></i>
            <div className="comment-group">
              <p className="user-name">Swaroop</p>
              <p className="user-comment">This made my day. Keep doing!</p>
              <p className="comment-date">2w</p>
            </div>
          </div>
          <div className="comment-details">
            <i className="fas fa-user-circle"></i>
            <div className="comment-group">
              <p className="user-name">Swaroop</p>
              <p className="user-comment">This made my day. Keep doing!</p>
              <p className="comment-date">2w</p>
            </div>
          </div>
          <div className="comment-details">
            <i className="fas fa-user-circle"></i>
            <div className="comment-group">
              <p className="user-name">Swaroop</p>
              <p className="user-comment">This made my day. Keep doing!</p>
              <p className="comment-date">2w</p>
            </div>
          </div>
          <div className="comment-details">
            <i className="fas fa-user-circle"></i>
            <div className="comment-group">
              <p className="user-name">Swaroop</p>
              <p className="user-comment">This made my day. Keep doing!</p>
              <p className="comment-date">2w</p>
            </div>
          </div>
          <div className="comment-details">
            <i className="fas fa-user-circle"></i>
            <div className="comment-group">
              <p className="user-name">Swaroop</p>
              <p className="user-comment">This made my day. Keep doing!</p>
              <p className="comment-date">2w</p>
            </div>
          </div>
        </div>
        <div className="add-comment">
          <input type="text" placeholder="Say something" />
          <i className="fas fa-at"></i>
          <i className="far fa-smile"></i>
        </div>
      </section>
    )
  }
}
