import React from 'react'
import './videoMoreInfo.css'
import ProfilePic from '../../assets/images/profile.jpg'
import CommentSection from '../comments/comments'
import NonLoggedInUserProfile from '../nonLoggedInUserProfile/nonLoggedInUserProfile'

const videoMoreInfo = () => {

  const [likes, setLikes] = React.useState(1520)
  const [showComments, setShowComments] = React.useState(false)

  const getClicks = () => {
    if (document.getElementsByClassName('fa-heart')[0].classList.contains('liked')) {
      setLikes(likes - 1);
      document.getElementsByClassName('fa-heart')[0].classList.remove('liked')
    } else {
      setLikes(likes + 1);
      document.getElementsByClassName('fa-heart')[0].classList.add('liked')
    }
  }
  const toggleUserProfile = (event) => {
    event.currentTarget.closest('.tiktok-moreinfo').nextSibling.nextSibling.classList.add('show-user-profile')
  }
  const toggleComments = (event) => {
    event.currentTarget.closest('.tiktok-moreinfo').nextSibling.classList.add('active-comments-widget')
  }

  return (
    <aside className="tiktok-moreinfo-wrapper">
      <div className="tiktok-moreinfo">
        <span className="profile" onClick={(event) => toggleUserProfile(event)}>
          <img className="profilepic" src={ProfilePic} alt="User profile picture" />
          <i className="fas fa-plus-circle"></i>
        </span>
        <span className="likes" onClick={getClicks}><i className="fas fa-heart"></i>{likes}</span>
        <span className="comments" onClick={(event) => toggleComments(event)}><i className="fas fa-comment-dots"></i>21</span>
        <span className="share"><i className="fas fa-share"></i>21</span>
      </div>
      <CommentSection />
      <NonLoggedInUserProfile />
      <div className="share-wrapper"></div>
    </aside>
  )
}
export default videoMoreInfo