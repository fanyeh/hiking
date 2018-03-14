import React, { Component } from 'react';
import Header from './Components/Header';
import Intro from './Components/Intro';
import Trip from './Components/Trip';
import './normalize.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
        <Trip />
      </div>
    );
  }
}

export default App;
