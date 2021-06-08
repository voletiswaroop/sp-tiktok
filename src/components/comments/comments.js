import React from 'react'
import './comments.css'

const intialData = [
  {
    "name": "Swaroop",
    "comment": "Lorem ipsum",
    "time": '1w'
  }, {
    "name": "Voleti",
    "comment": "hahaha",
    "time": '2w'
  }, {
    "name": "Gupta",
    "comment": "hahaha",
    "time": '2m'
  }, {
    "name": "SP",
    "comment": "hahaha",
    "time": '1hr'
  }, {
    "name": "Tiktok",
    "comment": "hahaha",
    "time": '2days'
  }, {
    "name": "User",
    "comment": "hahaha",
    "time": '1m'
  }, {
    "name": "Unkown",
    "comment": "hahaha",
    "time": '1min'
  }
]

const comments = () => {
  const [data, setData] = React.useState(intialData)
  const toggleComments = (event) => {
    event.currentTarget.closest('.comments-wrapper').classList.remove('active-comments-widget')
  }

  const addComment = (event) => {
    setData([{ ['name']: event.target.previousSibling.value }, ...data])
    event.target.previousSibling.value = ''
  }

  const commentsData = Array.from(data).map((item, index) => {
    return (
      <div className="comment-details" key={index}>
        <i className="fas fa-user-circle"></i>
        <div className="comment-group">
          <p className="user-name">{item.name ? item.name : 'Author'}</p>
          <p className="user-comment">{item.comment}</p>
          <p className="comment-date">{item.time ? item.time : 'Just now'}</p>
        </div>
      </div>)
  })

  return (
    <section className="comments-wrapper">
      <p className="comments-count">{data.length} comments <i className="fas fa-times close-comments" onClick={(event) => toggleComments(event)}></i></p>
      <div className="comments-container">{commentsData} </div>
      <div className="add-comment" >
        <input type="text" placeholder="Say something" />
        <i className="fas fa-paper-plane" onClick={(event) => addComment(event)}></i>
        <i className="fas fa-at"></i>
        <i className="far fa-smile"></i>
      </div>
    </section>
  )
}
export default comments