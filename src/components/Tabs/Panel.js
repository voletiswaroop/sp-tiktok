import React, { Component, Fragment } from 'react'

export default class Panel extends Component {
  render() {
    return <Fragment>{this.props.children}</Fragment>
  }
}
