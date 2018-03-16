import React, { Component } from 'react';
import ComponentHeader from '@components/ComponentHeader';
import Card from './Card';
import style from './index.css';

class Trip extends Component {
  render() {
    return (
      <div className={style.trip}>
        <ComponentHeader
          title="FEATURED TRIPS"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        />
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
