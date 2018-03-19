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
    this.refs.navigation.style.height = `170px`;
    this.setState({ toggleMenuID: menuID });
  }

  updateNavHeight(elem) {
    this.refs.navigation.style.height = `${elem.offsetHeight + 170}px`;
  }

  render() {
    const { isToggle, toggleMenuID } = this.state;
    const { navItems, menuItems } = this.props;
    const styleOnToggle = {
      color: '#cbbd9a',
      transform: 'rotate(90deg)',
    };
    return (
      <div className={style.navMobile}>
        <i className="fas fa-bars fa-2x" onClick={() => this.toggleMenu()} />
        {isToggle && (
          <div className={style.navigation} ref="navigation">
            {navItems.map((title, index) => (
              <div
                key={index}
                id={index}
                className={style.navItem}
                onClick={e => this.toggleMenuItem(e)}
                style={toggleMenuID === index ? { color: '#cbbd9a' } : null}
              >
                {title}
                <i
                  className="fas fa-arrow-right"
                  style={toggleMenuID === index ? styleOnToggle : null}
                />
                {toggleMenuID === index && (
                  <MenuItem onMounted={elem => this.updateNavHeight(elem)}>
                    {menuItems[title]}
                  </MenuItem>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default NavMobile;
