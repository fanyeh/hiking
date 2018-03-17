import React, { Component } from 'react';
import Social from './Social';
import style from './Member.css';
class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleSocial: false,
    };
  }
  toggleSocial() {
    this.setState({
      isToggleSocial: !this.state.isToggleSocial,
    });
  }
  render() {
    const { isToggleSocial } = this.state;
    const { name, location, imageSource } = this.props;
    return (
      <div className={style.member}>
        <div
          className={style.imageContainer}
          onMouseEnter={() => this.toggleSocial()}
          onMouseLeave={() => this.toggleSocial()}
        >
          <img src={imageSource} alt="" />
          <Social toggle={isToggleSocial} />
        </div>
        <h4 className={style.name}>{name}</h4>
        <span className={style.location}>{location}</span>
      </div>
    );
  }
}

export default Member;
