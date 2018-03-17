import React, { Component } from 'react';
import style from './Card.css';

class Card extends Component {
  render() {
    const { imageSource } = this.props;
    return (
      <div className={style.tripCard}>
        <div className={style.imageContainer}>
          <img className={style.image} src={imageSource} alt="" />
        </div>
        <div className={style.description}>
          <div className={style.days}>
            <h3>8</h3>
            <span className={style.unit}>Days</span>
          </div>
          <div className={style.groupSize}>
            <h3>10</h3>
            <span className={style.unit}>Max Group Size</span>
          </div>
          <div className={style.difficulty}>
            <h3>High</h3>
            <span className={style.unit}>Difficulty</span>
          </div>
        </div>
        <h3 className={style.name}>Trekking Expedition</h3>
        <div className={style.location}>
          <span className={style.site}>Everest Base Camp</span>
          <span className={style.country}>Ama Dablam , Nepal</span>
        </div>
      </div>
    );
  }
}

export default Card;
