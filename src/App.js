import React, { Component } from 'react';
import Header from './Components/Header';
import Intro from './Components/Intro';
import About from './Components/About';
import Blog from './Components/Blog';
import Footer from './Components/Footer';
import Team from './Components/Team';
import Trip from './Components/Trip';
import '@css/normalize.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
        <About />
        <Trip />
        <Team />
        <Blog />
        <Footer />
      </div>
    );
  }
}

export default App;
