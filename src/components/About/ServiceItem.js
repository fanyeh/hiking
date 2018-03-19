import React, { Component } from 'react';
import style from './ServiceItem.css';
class componentName extends Component {
  render() {
    const { imageSource, title, children } = this.props;
    return (
      <div className={style.serviceItem}>
        <div>
          <img src={imageSource} className={style.icon} alt="" />
        </div>
        <h3 className={style.title}>{title}</h3>
        <div className={style.description}>{children}</div>
      </div>
    );
  }
}
export default componentName;
