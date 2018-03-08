import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="logo">Logo</div>
        <ul className="navList">
          <li />
          <li>Home</li>
          <li>Pages</li>
          <li>Treks</li>
          <li>Gallery</li>
          <li>Blog</li>
          <li>Elements</li>
          <li>Contact</li>
          <li>
            <i class="fas fa-search" />
          </li>
        </ul>
        <div className="menuIcon">
          <i class="fas fa-bars fa-2x" />
        </div>
      </nav>
    );
  }
}

export default NavBar;
