import React, { Component } from 'react'
import './notifications.css'

export default class notifications extends Component {
  render() {
    return (
      <section className="notifications-wrapper">
        <div className="header">
          <p></p>
          <p className="user-name">Inbox<i className="fas fa-caret-down"></i></p>
          <i className="fas fa-inbox"></i>
        </div>
        <div className="notifications-container">
          <div className="notification-date">Today</div>
          <div className="notification-details">
            <i className="fas fa-user-circle"></i>
            <div className="notification-group">
              <p className="user-name">Swaroop</p>
              <p className="user-notification">Started following you<span> Just Now</span></p>
            </div>
            <p className="empty-cell"></p><p className="follow-btn">Follow</p>
          </div>
          <div className="notification-details">
            <i className="fas fa-user-circle"></i>
            <div className="notification-group">
              <p className="user-name">Pravallika</p>
              <p className="user-notification">Started following you <span> Today</span></p>
            </div>
            <p className="empty-cell"></p><p className="follow-btn following">Following</p>
          </div>
          <div className="notification-date">Yesterday</div>
          <div className="notification-details">
            <i className="fas fa-user-circle"></i>
            <div className="notification-group">
              <p className="user-name">Tiktok Team</p>
              <p className="user-notification">Started following you <span> 1d</span></p>
            </div>
            <p className="empty-cell"></p><p className="follow-btn">Follow</p>
          </div>
          <div className="notification-date">This week</div>
          <div className="notification-details">
            <i className="fas fa-user-circle"></i>
            <div className="notification-group">
              <p className="user-name">Gutpa &amp; Patnam </p>
              <p className="user-notification">Watched your profile<span> 3d</span></p>
            </div>
            <p className="empty-cell"></p><p className="follow-btn">Follow</p>
          </div>
          <div className="notification-date">Ealier</div>
          <div className="notification-details lives">
            <i className="fas fa-user-circle"></i>
            <div className="notification-group">
              <p className="user-name">Top Lives</p>
              <p className="user-notification"> <span> 5w</span></p>
            </div>
            <p className="empty-cell"></p><i class="fas fa-chevron-right"></i>
          </div>
          <div className="notification-details">
            <i className="fas fa-user-circle"></i>
            <div className="notification-group">
              <p className="user-name">Swaroop</p>
              <p className="user-notification">Started following you <span> 5w</span></p>
            </div>
            <p className="empty-cell"></p><p className="follow-btn following">Following</p>
          </div>
          <div className="notification-details">
            <i className="fas fa-user-circle"></i>
            <div className="notification-group">
              <p className="user-name">Blah</p>
              <p className="user-notification">Started following you <span> 6w</span></p>
            </div>
            <p className="empty-cell"></p><p className="follow-btn">Follow</p>
          </div>
          <div className="notification-details">
            <i className="fas fa-user-circle"></i>
            <div className="notification-group">
              <p className="user-name">Lorem</p>
              <p className="user-notification">Started following you <span> 7w</span></p>
            </div>
            <p className="empty-cell"></p><p className="follow-btn">Follow</p>
          </div>
          <div className="notification-details">
            <i className="fas fa-user-circle"></i>
            <div className="notification-group">
              <p className="user-name">Its me</p>
              <p className="user-notification">Started following you <span> 7w</span></p>
            </div>
            <p className="empty-cell"></p><p className="follow-btn">Follow</p>
          </div><div className="notification-details">
            <i className="fas fa-user-circle"></i>
            <div className="notification-group">
              <p className="user-name">Yo yo</p>
              <p className="user-notification">Started following you <span> 7w</span></p>
            </div>
            <p className="empty-cell"></p><p className="follow-btn">Follow</p>
          </div>
        </div>
      </section>
    )
  }
}
