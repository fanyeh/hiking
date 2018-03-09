import React, { Component } from 'react';
import Slider from './Slider';
import style from './index.css';

class Intro extends Component {
  render() {
    return (
      <section className={style.intro}>
        <Slider />
      </section>
    );
  }
}

export default Intro;
