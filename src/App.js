import React, { Component } from 'react';
import Header from './Components/Header';
import Intro from './Components/Intro';
<<<<<<< HEAD
import About from './Components/About';
import Blog from './Components/Blog';
import Footer from './Components/Footer';
import Team from './Components/Team';
import '@css/normalize.css';

=======
import Trip from './Components/Trip';
import './normalize.css';
>>>>>>> feature/trip
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
<<<<<<< HEAD
        <Team />
=======
        <Trip />
>>>>>>> feature/trip
      </div>
    );
  }
}

export default App;
