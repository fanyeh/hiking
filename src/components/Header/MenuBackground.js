import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';
import style from './MenuBackground.css';

class MenuBackground extends Component {
  updateTransitionStyle(props) {
    const duration = 200;
    const { prevCoords, coords } = props;
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
        transition: `opacity ${duration}ms , transform ${duration * 0.75}ms`,
        ...coords,
      },

      exited: {
        opacity: 0,
        transform: 'rotateX(-90deg)',
        transition: `opacity ${duration}ms , transform ${duration * 0.75}ms`,
        ...coords,
      },
    };

    let entering;
    if (!prevCoords) {
      entering = {
        top: coords.top,
        left: coords.left,
        opacity: 0,
      };
    } else {
      entering = {
        top: prevCoords.top,
        left: prevCoords.left,
        width: prevCoords.width,
        height: prevCoords.heigth,
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
    let transitionStyle = {
      entering: {},
      entered: {},
      exiting: {},
      exited: {},
    };
    if (this.props.coords) {
      transitionStyle = this.updateTransitionStyle(this.props);
    }
    const { toggle } = this.props;

    return (
      <Transition in={toggle} timeout={0} appear={true}>
        {state => <div className={style.menuBackground} style={{ ...transitionStyle[state] }} />}
      </Transition>
    );
  }
}

export default MenuBackground;
