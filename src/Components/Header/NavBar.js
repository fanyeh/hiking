import React, { Component } from 'react';
import style from './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <nav>
        {/* <div className={style.logo}>Logo</div> */}
        <ul className={style.navList}>
          <li>Home</li>
          <li>Pages</li>
          <li>Treks</li>
          <li>Gallery</li>
          <li>Blog</li>
          <li>Elements</li>
          <li>Contact</li>
          <li>
            <i className="fas fa-search" />
          </li>
        </ul>
        {/* <div className={style.menuIcon}>
          <i className="fas fa-bars fa-2x" />
        </div> */}
      </nav>
    );
  }
}

export default NavBar;
