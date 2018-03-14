import React, { Component } from 'react';
import Header from './Components/Header';
import Intro from './Components/Intro';
<<<<<<< HEAD
import About from './Components/About';
import Blog from './Components/Blog';
import '@css/normalize.css';

=======
import Footer from './Components/Footer';
import './normalize.css';
>>>>>>> feature/footer
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
<<<<<<< HEAD
        <About />
        <Blog />
=======
        <Footer />
>>>>>>> feature/footer
      </div>
    );
  }
}

export default App;
