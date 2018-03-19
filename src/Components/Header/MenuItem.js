import React, { Component } from 'react';
import style from './MenuItem.css';
import Transition from 'react-transition-group/Transition';

class MenuItem extends Component {
  constructor(props) {
    super(props);
    const defaultStyle = this.props.desktop
      ? `${style.menuItem} ${style.desktop}`
      : `${style.menuItem}`;
    this.state = {
      transitionStyles: {
        entering: { opacity: 0 },
        entered: { opacity: 1, transition: 'opacity 300ms' },
      },
      defaultStyle,
    };
  }

  componentDidMount() {
    if (this.props.onMounted) {
      this.props.onMounted(this.refs.menuItem);
    }
  }

  render() {
    const { defaultStyle, transitionStyles } = this.state;
    const { children } = this.props;
    return (
      <div className={defaultStyle} ref="menuItem">
        <Transition timeout={0} appear={true} in={true}>
          {state => (
            <div style={{ ...transitionStyles[state] }}>
              {children.map((item, index) => {
                return (
                  <div key={index} className={style.item}>
                    {item}
                  </div>
                );
              })}
            </div>
          )}
        </Transition>
      </div>
    );
  }
}

export default MenuItem;
