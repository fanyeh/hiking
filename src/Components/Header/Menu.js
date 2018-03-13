import React, { Component } from 'react';
import style from './Menu.css';
import Transition from 'react-transition-group/Transition';

class Menu extends Component {
  componentDidMount() {
    this.props.onMounted(this.refs.menu);
  }

  render() {
    const transitionStyles = {
      entering: { opacity: 0 },
      entered: { opacity: 1, transition: 'opacity 300ms' },
    };
    return (
      <div className={style.container} ref="menu">
        <Transition timeout={0} appear={true} in={true}>
          {state => (
            <div style={{ ...transitionStyles[state] }}>
              <div className={style.menuItem}>menu-item1</div>
              <div className={style.menuItem}>menu-item2</div>
              <div className={style.menuItem}>menu-item3</div>
              <div className={style.menuItem}>menu-item4</div>
              <div className={style.menuItem}>menu-item5</div>
            </div>
          )}
        </Transition>
      </div>
    );
  }
}

export default Menu;
