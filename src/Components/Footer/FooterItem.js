import React, { Component } from 'react';
import style from './FooterItem.css';
class FooterItem extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className={style.footerItem}>
        <h3>{title}</h3>
        <ul className={style.list}>{children}</ul>
      </div>
    );
  }
}

export default FooterItem;
