import React, { Component } from 'react'
import './tiktokPanel.css'
import TitkTokVideos from '../titkTokVideos/titkTokVideos'
import UserProfile from '../loggedInUserProfile/loggedInUserProfile'
import Notifications from '../notifications/notifications'
import CreateVideo from '../videoCreator/videoCreator'
import EasyTabs from 'react-easy-tabs-component'

export default class tiktokPanel extends Component {
  render() {
    return (
      <section className="tiktok-panel">
        <EasyTabs selected={0}>
          <section dataicon="fas fa-home" title="Home"><TitkTokVideos /></section>
          <section dataicon="fas fa-search" title="Discover"><TitkTokVideos /></section>
          <section dataicon="fas fa-plus-square" title=""><CreateVideo /></section>
          <section dataicon="fas fa-inbox" title="Inbox"><Notifications /></section>
          <section dataicon="fas fa-user" title="Me"><UserProfile /></section>
        </EasyTabs>
      </section>
    )
  }
}