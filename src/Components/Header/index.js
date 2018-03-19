import React, { Component } from 'react';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';
import style from './index.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      headerStyle: [style.basic],
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const length = this.state.headerStyle.length;
    const { headerStyle } = this.state;
    if (window.scrollY > 0 && length === 1) {
      headerStyle.push(style.change);
      this.setState({
        headerStyle,
      });
    } else if (window.scrollY === 0 && length === 2) {
      headerStyle.pop();
      this.setState({
        headerStyle,
      });
    }
  }

  render() {
    const menuItems = {
      Home: ['Home Classic', 'Home Carousel', 'Home Showcase'],
      Pages: ['About me', 'About us', 'Single Trek 1', 'Single Trek 2', '404'],
      Treks: ['High ifficulty', 'Mid Difficulty', 'Low Difficulty'],
      Gallery: ['Classic', 'Filter', 'Single Project 1', 'Single Project 2'],
      Blog: ['Blog Classic', 'Image Post', 'Slider Post', 'Video Post', 'Facebook Post'],
    };
    const navItems = Object.keys(menuItems);

    const { headerStyle } = this.state;
    return (
      <header className={headerStyle.join(' ')}>
        <div className={style.logo}>Logo</div>
        <NavDesktop navItems={navItems} menuItems={menuItems} />
        <NavMobile navItems={navItems} menuItems={menuItems} />
      </header>
    );
  }
}

export default Header;
