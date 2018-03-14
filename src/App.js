import React, { Component } from 'react';
import Header from './Components/Header';
import Intro from './Components/Intro';
import Footer from './Components/Footer';
import './normalize.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
        <Footer />
      </div>
    );
  }
}

export default App;
