import React, { Component } from 'react';
import Card from './Card';
import style from './index.css';

class Blog extends Component {
  render() {
    return (
      <div>
        <h2>LATES OF OUR BLOG</h2>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
        <div className={style.cardContainer}>
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default Blog;
