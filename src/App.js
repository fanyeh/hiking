import React, { Component } from 'react';
import Header from '@components/Header';
import Intro from '@components/Intro';
import About from '@components/About';
import Blog from '@components/Blog';
import Footer from '@components/Footer';
import Team from '@components/Team';
import Trip from '@components/Trip';
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
