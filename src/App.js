import React, { Component } from 'react';
import './App.css'
import TiktokPanel from './components/tiktokPanel/tiktokPanel'

class App extends Component {
  render() {
    return (
      <main className="tiktok-wrapper">
        <TiktokPanel />
      </main>
    );
  }
}

export default App;
