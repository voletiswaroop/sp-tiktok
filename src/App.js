import React, { Component } from 'react';
import './App.css'
import Header from './components/Header/Header'
import Video from './components/video/video'
import Footer from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <main className="tiktok-wrapper">
        <Header />
        <Video />
        <Footer />
      </main>
    );
  }
}

export default App;
