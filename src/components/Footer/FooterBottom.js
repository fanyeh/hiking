import React, { Component } from 'react';
import style from './FooterBottom.css';
class FooterBottom extends Component {
  render() {
    return (
      <div className={style.footerBottom}>
        <div className={style.author}>
          Made by <span className={style.name}>Jack Yeh</span> with{' '}
          <i className="fab fa-react" style={{ color: '#53C1DE' }} /> +{' '}
          <i className="fas fa-heart" style={{ color: '#E7040F' }} />
        </div>
        <div className={style.social}>
          <i className="fab fa-twitter" />
          <i className="fab fa-google-plus-g" />
          <i className="fab fa-instagram" />
          <i className="fab fa-youtube" />
        </div>
      </div>
    );
  }
}

export default FooterBottom;
