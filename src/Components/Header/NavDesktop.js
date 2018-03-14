import React, { Component } from 'react';
import MenuItem from './MenuItem';
import style from './NavDesktop.css';
import Transition from 'react-transition-group/Transition';

class NavDesktop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenuID: -1,
      transitionStyle: {
        entering: {},
        entered: {},
        exiting: {},
        exited: {},
      },
      navItems: ['Home', 'Pages', 'Treks', 'Gallery', 'Blog', 'Elements', 'Contact'],
    };
  }

  showMenu(e) {
    const menuID = Number(e.currentTarget.id);
    this.setState({
      showMenuID: menuID,
    });
  }

  hideMenu(e) {
    clearTimeout(this.timeoutID);
    if (e.relatedTarget === window || !e.relatedTarget.className.includes('navItem')) {
      this.setState({
        showMenuID: -1,
        fromNavItem: null,
      });
    } else {
      this.setState({
        showMenuID: -1,
      });
    }
  }

  updateMenuBackground(menu) {
    const navigationRect = this.refs.navigation.getBoundingClientRect();
    const menuRect = menu.getBoundingClientRect();
    const coords = {
      height: `${menuRect.height}px`,
      width: `${menuRect.width}px`,
      top: `${menuRect.top - navigationRect.top}px`,
      left: `${menuRect.left - navigationRect.left}px`,
    };
    const transitionStyle = this.updateTransitionStyle(coords);
    this.setState({
      transitionStyle,
      fromNavItem: coords,
    });
  }

  updateTransitionStyle(coords) {
    const duration = 200;
    const { fromNavItem } = this.state;
    const defaultStyle = {
      entered: {
        opacity: 1,
        transform: 'rotateX(0deg)',
        transition: `opacity ${duration}ms,width ${duration}ms, height ${duration}ms, left ${duration}ms, transform ${duration *
          0.75}ms`,
        ...coords,
      },
      exiting: {
        opacity: 1,
        transform: 'rotateX(0deg)',
        ...coords,
      },

      exited: {
        opacity: 0,
        transition: `opacity ${duration}ms , transform ${duration * 0.75}ms`,
        ...coords,
      },
    };

    let entering;
    if (!fromNavItem) {
      entering = {
        top: coords.top,
        left: coords.left,
        opacity: 0,
      };
    } else {
      entering = {
        top: fromNavItem.top,
        left: fromNavItem.left,
        width: fromNavItem.width,
        height: fromNavItem.heigth,
        opacity: 1,
      };
    }
    const transitionStyle = {
      entering,
      ...defaultStyle,
    };
    return transitionStyle;
  }

  render() {
    const { showMenuID, transitionStyle, navItems } = this.state;
    return (
      <nav ref="navigation">
        <Transition in={showMenuID > -1} timeout={0}>
          {state => (
            <div
              className={style.menuBackground}
              ref="menuBackground"
              style={{ ...transitionStyle[state] }}
            />
          )}
        </Transition>
        <ul>
          {navItems.map((item, i) => {
            return (
              <li
                key={i}
                id={i}
                onMouseEnter={e => this.showMenu(e)}
                onMouseLeave={e => this.hideMenu(e)}
              >
                <div className={style.navItem}>{item}</div>
                {showMenuID === i && (
                  <MenuItem onMounted={menu => this.updateMenuBackground(menu)} desktop={true} />
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
