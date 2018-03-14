import React, { Component } from 'react';
import Header from './Components/Header';
import Intro from './Components/Intro';
import '@css/normalize.css';

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
