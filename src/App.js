import React, { Component } from 'react';
import Header from './Components/Header';
import Intro from './Components/Intro';
import About from './Components/About';
import Blog from './Components/Blog';
import '@css/normalize.css';

import Footer from './Components/Footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
      </div>
    );
  }
}

export default App;
