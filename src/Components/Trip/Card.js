import React, { Component } from 'react';
import style from './Card.css';

class Card extends Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.image} />
        <div className={style.description}>
          <div className={style.days}>8</div>
          <div className={style.groupSize}>10</div>
          <div className={style.difficulty}>High</div>
        </div>
        <h3>Trekking Expedition</h3>
        <div className={style.location}>
          <span>Everest Base Camp</span>
          <span>Ama Dablam , Nepal</span>
        </div>
      </div>
    );
  }
}

export default Card;
