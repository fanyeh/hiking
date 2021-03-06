import React, { Component } from 'react';
import MenuItem from './MenuItem';
import MenuBackground from './MenuBackground';
import style from './NavDesktop.css';

class NavDesktop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenuID: -1,
      prevCoords: null,
    };
  }

  openMenu(e) {
    const menuID = Number(e.currentTarget.id);
    this.setState({ showMenuID: menuID });
  }

  leaveMenu(e) {
    const toTarget = e.relatedTarget;
    if (toTarget === window || !toTarget.className.includes('navItem')) {
      this.setState({
        showMenuID: -1,
        prevCoords: null,
        showMenuBackground: false,
      });
    } else {
      this.setState({ prevCoords: this.state.coords });
    }
  }

  updateMenuBackground(menu) {
    const menuRect = menu.getBoundingClientRect();
    const navRect = this.refs.navBar.getBoundingClientRect();
    const coords = {
      height: `${menuRect.height}px`,
      width: `${menuRect.width}px`,
      top: `${menuRect.top - navRect.top}px`,
      left: `${menuRect.left - navRect.left}px`,
    };
    this.setState({ showMenuBackground: true, coords });
  }

  render() {
    const { showMenuID, showMenuBackground, coords, prevCoords } = this.state;
    const { navItems, menuItems } = this.props;

    return (
      <nav ref="navBar" className={style.navBar}>
        <MenuBackground toggle={showMenuBackground} coords={coords} prevCoords={prevCoords} />
        <ul className={style.navList}>
          {navItems.map((title, i) => {
            return (
              <li
                key={i}
                id={i}
                onMouseEnter={e => this.openMenu(e)}
                onMouseLeave={e => this.leaveMenu(e)}
                className={style.navItem}
              >
                <div className={style.navItemName}>{title}</div>
                {showMenuID === i && (
                  <MenuItem
                    onMounted={menu => this.updateMenuBackground(menu)}
                    desktop={true}
                    key={i}
                  >
                    {menuItems[title]}
                  </MenuItem>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default NavDesktop;
