import React, { Component } from 'react';
import style from './Card.css';
class Card extends Component {
  render() {
    const { imageSource } = this.props;
    return (
      <div className={style.card}>
        <div className={style.imageWrapper}>
          <div className={style.mask} />
          <img className={style.image} src={imageSource} alt="" />
        </div>

        <article className={style.content}>
          <h3 className={style.title}>Adventure Time</h3>
          <time className={style.time}>02.11.2016</time>
          <p className={style.article}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem harum aspernatur
            sapiente error, voluptas fuga, laudantium ullam magni fugit. Qui!
          </p>
          <div className={style.category}>
            <div>Travel</div>
            <div>Blog</div>
          </div>
        </article>
      </div>
    );
  }
}

export default Card;
