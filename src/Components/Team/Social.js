import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';

import style from './Social.css';

class Social extends Component {
  render() {
    const duration = 400;
    const translateHeight = 'translateY(-50px)';
    const transitionStyles = {
      entering: {
        opacity: 0,
      },
      entered: {
        opacity: 1,
        transform: translateHeight,
        transition: `opacity ${duration}ms , transform ${duration}ms`,
      },
      exiting: {
        opacity: 1,
        transform: translateHeight,
        transition: `opacity ${duration}ms , transform ${duration}ms`,
      },
      exited: {
        opacity: 0,
        transform: 'translateY(0)',
        transition: `opacity ${duration}ms , transform ${duration}ms`,
      },
    };

    const { toggle } = this.props;

    return (
      <div className={style.container}>
        <Transition timeout={{ enter: 0, exit: 200 }} appear={true} in={toggle}>
          {state => <i className="fab fa-twitter " style={{ ...transitionStyles[state] }} />}
        </Transition>

        <Transition timeout={{ enter: 100, exit: 100 }} appear={true} in={toggle}>
          {state => <i className="fab fa-instagram " style={{ ...transitionStyles[state] }} />}
        </Transition>

        <Transition timeout={{ enter: 200, exit: 0 }} appear={true} in={toggle}>
          {state => <i className="fab fa-snapchat-ghost" style={{ ...transitionStyles[state] }} />}
        </Transition>
      </div>
    );
  }
}

export default Social;
