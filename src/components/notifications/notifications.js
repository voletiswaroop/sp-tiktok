import React from 'react'
import './notifications.css'

const intitalData = {
  "Today": [
    {
      "name": "Swaroop",
      "notification": "Started following you",
      "time": 'Just Now',
      "status": "Follow"
    }, {
      "name": "Pravallika",
      "comment": "Started following you",
      "time": 'Today',
      "status": "Following"
    },
  ],
  "Yesterday": [{
    "name": "Tiktok Team",
    "notification": "Started following you",
    "time": '1d',
    "status": "Follow"
  }],
  "This week": [{
    "name": "Gutpa & Patnam",
    "notification": "Watched your profile",
    "time": '3d',
    "status": "Follow"
  }],
  "Ealier": [
    {
      "name": "Voleti",
      "notification": "Started following you",
      "time": '6w',
      "status": "Follow"
    }, {
      "name": "Lorem",
      "comment": "Started following you",
      "time": '5w',
      "status": "Following"
    },
    {
      "name": "Gupta",
      "notification": "Started following you",
      "time": '5w',
      "status": "Follow"
    }, {
      "name": "Ipsum",
      "comment": "Started following you",
      "time": '4w',
      "status": "Following"
    },
    {
      "name": "Author",
      "notification": "Started following you",
      "time": '4w',
      "status": "Follow"
    }, {
      "name": "New user",
      "comment": "Started following you",
      "time": '4w',
      "status": "Following"
    }
  ]
}
const notifications = () => {
  const toggleFollow = (event) => {
    if (event.target.classList.contains('follow-btn')) {
      event.target.classList.toggle('following')
      if (event.target.innerText == 'Follow') event.target.innerText = 'Following'
      else if (event.target.innerText == 'Following') event.target.innerText = 'Follow'
    }
  }

  const getData = Object.entries(intitalData).map((item, index) => {
    return (
      <>
        <div className="notification-date" key={index}>{item[0]}</div>
        {item[0] === 'Ealier' ? <div className="notification-details lives">
          <i className="fas fa-user-circle"></i>
          <div className="notification-group">
            <p className="user-name">Top Lives</p>
            <p className="user-notification"> <span> 5w</span></p>
          </div>
          <p className="empty-cell"></p><i className="fas fa-chevron-right"></i>
        </div> : null}
        {Array.from(item[1]).map((item, index) => {
          return (
            <div className="notification-details" key={index}>
              <i className="fas fa-user-circle"></i>
              <div className="notification-group">
                <p className="user-name">{item.name}</p>
                <p className="user-notification">{item.notification}<span> {item.time}</span></p>
              </div>
              <p className="empty-cell"></p>
              <p className={`follow-btn ${item.status === 'Following' ? 'following' : ''}`}>{item.status}</p>
            </div>
          )
        })}
      </>
    )
  })

  return (
    <section className="notifications-wrapper">
      <div className="header">
        <p></p>
        <p className="user-name">Inbox<i className="fas fa-caret-down"></i></p>
        <i className="fas fa-inbox"></i>
      </div>
      <div className="notifications-container" onClick={(event) => toggleFollow(event)}>{getData}</div>
    </section>
  )
}

export default notifications