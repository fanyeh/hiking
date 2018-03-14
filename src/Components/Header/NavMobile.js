import React, { Component } from 'react';
import MenuItem from './MenuItem';
import style from './NavMobile.css';
class NavMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false,
      toggleMenuID: -1,
    };
  }

  toggleMenu() {
    this.setState({ isToggle: !this.state.isToggle });
  }

  toggleMenuItem(e) {
    let menuID = Number(e.currentTarget.id);
    const { toggleMenuID } = this.state;
    if (menuID === toggleMenuID) {
      menuID = -1;
    }
    this.setState({ toggleMenuID: menuID });
  }

  render() {
    const { isToggle, toggleMenuID } = this.state;
    const { navItems } = this.props;
    return (
      <div className={style.navMobile}>
        <i className="fas fa-bars fa-2x" onClick={() => this.toggleMenu()} />
        {isToggle && (
          <div className={style.navigation}>
            {navItems.map((item, index) => (
              <div
                key={index}
                id={index}
                className={style.navItem}
                onClick={e => this.toggleMenuItem(e)}
              >
                {item}
                {toggleMenuID === index && <MenuItem />}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default NavMobile;
