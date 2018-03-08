import React, { Component } from 'react';
import NavBar from './NavBar';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">Logo</div>
        <NavBar />
        <div className="menuIcon">
          <i className="fas fa-bars fa-2x" />
        </div>
      </header>
    );
  }
}

export default Header;
