import React, { Component } from 'react';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';
import style from './index.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className={style.logo}>Logo</div>
        <NavDesktop />
        <NavMobile
          navItems={['Home', 'Pages', 'Treks', 'Gallery', 'Blog', 'Elements', 'Contact']}
        />
      </header>
    );
  }
}

export default Header;
