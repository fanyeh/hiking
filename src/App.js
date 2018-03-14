import React, { Component } from 'react';
import Header from './Components/Header';
import Intro from './Components/Intro';
import Team from './Components/Team';
import './normalize.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
        <Team />
      </div>
    );
  }
}

export default App;
