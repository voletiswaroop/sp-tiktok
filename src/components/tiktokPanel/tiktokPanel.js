import React, { Component } from 'react'
import './tiktokPanel.css'
import Tabs from '../Tabs/Tabs'
import Panel from '../Tabs/Panel'
import TitkTokVideos from '../titkTokVideos/titkTokVideos'
import UserProfile from '../loggedInUserProfile/loggedInUserProfile'
import Notifications from '../notifications/notifications'
import CreateVideo from '../videoCreator/videoCreator'

export default class tiktokPanel extends Component {
  render() {
    return (
      <section className="tiktok-panel">
        <Tabs selected={3}>
          <Panel dataIcon="fas fa-home" title="Home"><TitkTokVideos /></Panel>
          <Panel dataIcon="fas fa-search" title="Discover"> <TitkTokVideos /></Panel>
          <Panel dataIcon="fas fa-plus-square" title=""><CreateVideo /></Panel>
          <Panel dataIcon="fas fa-inbox" title="Inbox"><Notifications /></Panel>
          <Panel dataIcon="fas fa-user" title="Me"><UserProfile /></Panel>
        </Tabs>
      </section>
    )
  }
}