import React, { Component } from 'react';
import Card from './Card';
import style from './index.css';

class Trip extends Component {
  render() {
    return (
      <div>
        <h2>FEATURE TRIPS</h2>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
        <div className={style.cardContainer}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default Trip;
