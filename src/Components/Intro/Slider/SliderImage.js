import React, { Component } from 'react';
import style from './SliderImage.css';

class SliderImage extends Component {
  render() {
    return (
      <div className={style.container}>
        <img
          src={require(`../../../frontpage${this.props.sourceID % 2}.jpg`)}
          alt=""
          className={style.image}
        />
        <div className={style.mask} />
      </div>
    );
  }
}

export default SliderImage;
