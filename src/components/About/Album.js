import React, { Component } from 'react';
import style from './Album.css';
class Album extends Component {
  render() {
    const { images } = this.props;
    return (
      <div className={style.album}>
        {images.map((image, index) => {
          return (
            <div key={index} className={style.imageWrapper}>
              {image}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Album;
