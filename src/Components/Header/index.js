import React, { Component } from 'react';
import NavBar from './NavBar';
import style from './index.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className={style.logo}>Logo</div>
        <NavBar />
        <div className={style.menuIcon}>
          <i className="fas fa-bars fa-2x" />
        </div>
      </header>
    );
  }
}

export default Header;
