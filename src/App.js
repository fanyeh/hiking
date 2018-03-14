import React, { Component } from 'react';
import Header from './Components/Header';
import Intro from './Components/Intro';
import Blog from './Components/Blog';
import './normalize.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
        <Blog />
      </div>
    );
  }
}

export default App;
