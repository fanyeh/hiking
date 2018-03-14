import React, { Component } from 'react';
import style from './Card.css';
class Card extends Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.image} />
        <article className={style.content}>
          <h3>Adventure Time</h3>
          <time>02.11.2016</time>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem harum aspernatur
            sapiente error, voluptas fuga, laudantium ullam magni fugit. Qui!
          </p>
          <div className={style.category}>
            <span>travel</span>
            <span>Blog</span>
          </div>
        </article>
      </div>
    );
  }
}

export default Card;
