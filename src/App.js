import React, { Component } from 'react';
import Header from './components/Header';
import Feed from './components/Feed';
import './app.css';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Feed />
      </>
    );
  }
}

export default App;
