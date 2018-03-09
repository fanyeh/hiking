import React, { Component } from 'react';
import SliderController from './SliderController';
import style from './index.css';

class Slider extends Component {
  render() {
    return (
      <div className={style.slider}>
        <img src={require('../../../frontpage.jpg')} alt="" />
        <SliderController>
          <div className={style.info}>
            <h1>Wild nature safe adventure</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate aliquam
              aspernatur architecto tempora ipsum deleniti,
            </p>
            <div className={style.moreInfo}>
              <button>More Info</button>
            </div>
          </div>
        </SliderController>
      </div>
    );
  }
}

export default Slider;
