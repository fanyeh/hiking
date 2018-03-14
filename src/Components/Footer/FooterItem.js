import React, { Component } from 'react';
import style from './FooterItem.css';
class FooterItem extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className={style.container}>
        <h3>{title}</h3>
        <ul>{children}</ul>
      </div>
    );
  }
}

export default FooterItem;
