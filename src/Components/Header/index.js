import React, { Component } from 'react';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';
import style from './index.css';

class Header extends Component {
  render() {
    const navItems = ['Home', 'Pages', 'Treks', 'Gallery', 'Blog', 'Elements', 'Contact'];
    return (
      <header className={style.header}>
        <div className={style.logo}>Logo</div>
        <NavDesktop navItems={navItems} />
        <NavMobile navItems={navItems} />
      </header>
    );
  }
}

export default Header;
