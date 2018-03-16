import React, { Component } from 'react';
import ComponentHeader from '@components/ComponentHeader';
import Card from './Card';
import style from './index.css';

class Blog extends Component {
  render() {
    return (
      <div className={style.blog}>
        {/* <h2>LATES OF OUR BLOG</h2>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span> */}
        <ComponentHeader
          title="LATEST OF OUR BLOG"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        />
        <div className={style.cardContainer}>
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default Blog;
