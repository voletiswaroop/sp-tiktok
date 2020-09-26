import React, { Component } from 'react'

export default class tabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: this.props.selected || 0
    }
  }
  handleChange(index) {
    this.setState({ selected: index })
  }
  render() {
    return (
      <div className="tabs-wrapper">
        <ul className="tabs-heading">
          {this.props.children.map((item, index) => {
            let activeTab = index == this.state.selected ? 'selected' : '';
            return (
              <li className={activeTab} key={index} onClick={this.handleChange.bind(this, index)}>
                <i className={item.props.dataIcon}></i> {item.props.title} </li>
            )
          })}
        </ul>
        <div className="tabs-content">{this.props.children[this.state.selected]}</div>
      </div>
    )
  }
}