import React, { Component } from 'react';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';
import style from './index.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      headerStyle: [style.header],
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
    const navItems = ['Home', 'Pages', 'Treks', 'Gallery', 'Blog', 'Elements', 'Contact'];
    const { headerStyle } = this.state;
    return (
      <header className={headerStyle.join(' ')}>
        <div className={style.logo}>Logo</div>
        <NavDesktop navItems={navItems} />
        <NavMobile navItems={navItems} />
      </header>
    );
  }
}

export default Header;
