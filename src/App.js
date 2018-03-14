import React, { Component } from 'react';
import Header from './Components/Header';
import Intro from './Components/Intro';
import About from './Components/About';
import '@css/normalize.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
        <About />
      </div>
    );
  }
}

export default App;
