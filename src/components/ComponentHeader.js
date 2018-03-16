import React, { Component } from 'react';
import style from './ComponentHeader.css';
class ComponentHeader extends Component {
  render() {
    const { title, description } = this.props;
    return (
      <div className={style.container}>
        <h1 className={style.title}>{title}</h1>
        <span className={style.description}>{description}</span>
      </div>
    );
  }
}

export default ComponentHeader;
