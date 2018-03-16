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
    const { name, location } = this.props;
    return (
      <div className={style.member}>
        <div
          className={style.imageContainer}
          onMouseEnter={() => this.toggleSocial()}
          onMouseLeave={() => this.toggleSocial()}
        >
          <img
            src="https://images.unsplash.com/photo-1486210284477-e900ad8a6820?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c63ccb0d48159c15f7ca6e47bd0d8a0e&auto=format&fit=crop&w=1504&q=80"
            alt=""
          />
          <Social toggle={isToggleSocial} />
        </div>
        <h4 className={style.name}>{name}</h4>
        <span className={style.location}>{location}</span>
      </div>
    );
  }
}

export default Member;
