import React, { Component } from 'react';
import style from './SliderController.css';

class SliderController extends Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.arrow}>
          <button className={style.button} onClick={() => this.props.onClick('left')}>
            <i className="fas fa-angle-left fa-3x" />
          </button>
        </div>
        <div className={style.center}>{this.props.children}</div>
        <div className={style.arrow}>
          <button className={style.button} onClick={() => this.props.onClick('right')}>
            <i className="fas fa-angle-right fa-3x" />
          </button>
        </div>
      </div>
    );
  }
}

export default SliderController;
