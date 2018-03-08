import React, { Component } from 'react';
import NavBar from './Components/Header/NavBar';
import './normalize.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <NavBar />
        </header>
      </div>
    );
  }
}

export default App;
