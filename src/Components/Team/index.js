import React, { Component } from 'react';
import Member from './Member';
import style from './index.css';
class Team extends Component {
  render() {
    return (
      <div>
        <h2>OUT FABULOUS TEAM</h2>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
        <div className={style.memberContainer}>
          <Member />
          <Member />
          <Member />
        </div>
      </div>
    );
  }
}

export default Team;
