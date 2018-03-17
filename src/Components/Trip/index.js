import React, { Component } from 'react';
import ComponentHeader from '@components/ComponentHeader';
import Card from './Card';
import style from './index.css';

class Trip extends Component {
  render() {
    const cards = [];
    for (let i = 1; i <= 4; i++) {
      cards.push(<Card key={i} imageSource={require(`@img/trip/trip${i}.jpg`)} />);
    }
    return (
      <div className={style.trip}>
        <ComponentHeader
          title="FEATURED TRIPS"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        />
        <div className={style.cardContainer}>{cards}</div>
      </div>
    );
  }
}

export default Trip;
