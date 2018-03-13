import React, { Component } from 'react';
import Menu from './Menu';
import style from './NavBar.css';
import Transition from 'react-transition-group/Transition';

class NavBar extends Component {
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
    if (e.relatedTarget.className !== 'navItem') {
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
        transition: `opacity ${duration}ms,width ${duration}ms, height ${duration}ms, left ${duration}ms`,
        ...coords,
      },
      exiting: {
        opacity: 1,
        ...coords,
      },

      exited: {
        opacity: 0,
        transition: `opacity ${duration}ms`,
        ...coords,
      },
    };

    let transitionStyle;
    if (!fromNavItem) {
      transitionStyle = {
        entering: {
          top: coords.top,
          left: coords.left,
          opacity: 0,
        },
        ...defaultStyle,
      };
    } else {
      transitionStyle = {
        entering: {
          top: fromNavItem.top,
          left: fromNavItem.left,
          width: fromNavItem.width,
          height: fromNavItem.heigth,
          opacity: 1,
        },
        ...defaultStyle,
      };
    }
    return transitionStyle;
  }

  render() {
    const showMenuID = this.state.showMenuID;
    const transitionStyle = this.state.transitionStyle;
    const navItems = this.state.navItems;
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
        <ul className={style.list}>
          {navItems.map((item, i) => {
            return (
              <li
                key={i}
                id={i}
                onMouseEnter={e => this.showMenu(e)}
                onMouseLeave={e => this.hideMenu(e)}
              >
                <div className="navItem">{item}</div>
                {showMenuID === i && <Menu onMounted={menu => this.updateMenuBackground(menu)} />}
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
