import React, { Component } from 'react';
import style from './SliderController.css';

class SliderController extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className={style.sliderController}>
        <div className={style.slideLeft}>
          <button className={style.controlButton}>
            <i className="fas fa-angle-left fa-2x" />
          </button>
        </div>
        <div className={style.center}>{this.props.children}</div>
        <div className={style.slideRight}>
          <button className={style.controlButton}>
            <i className="fas fa-angle-right fa-2x" />
          </button>
        </div>
      </div>
    );
  }
}

export default SliderController;
