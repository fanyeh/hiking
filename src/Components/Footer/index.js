import React, { Component } from 'react';
import FooterItem from './FooterItem';
import FooterBottom from './FooterBottom';
import style from './index.css';
class Footer extends Component {
  render() {
    return (
      <div className={style.footer}>
        <div className={style.itemContainer}>
          <FooterItem title="EVEREST">
            <li>Home</li>
            <li>Pages</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Elements</li>
            <li>Contacts</li>
          </FooterItem>

          <FooterItem title="Useful Links">
            <li>FAQs</li>
            <li>Download Catalog</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </FooterItem>

          <FooterItem title="Contact Us">
            <li>Phone +39 123456789</li>
            <li>Mail mail@domain.com</li>
            <li>Monday to Friday 9.00 am to 8.00 pm</li>
            <li>Saturday from 9.00 am to 12.00 pm</li>
            <li>322 Moon St, Venice Italy, 1231</li>
          </FooterItem>

          <FooterItem title="Attribution">
            <li>
              Below icons are from{' '}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
              and licensed by{' '}
              <a
                href="http://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC 3.0 BY
              </a>
              <ul>
                <li>
                  <img src={require('@img/cloud.svg')} alt="" />
                  made by{' '}
                  <a href="http://www.freepik.com" title="Freepik">
                    Freepik
                  </a>
                </li>
                <li>
                  <img src={require('@img/backpack.svg')} alt="" />
                  made by{' '}
                  <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">
                    Good Ware
                  </a>
                </li>
                <li>
                  <img src={require('@img/knife.svg')} alt="" />
                  made by{' '}
                  <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">
                    Smashicons
                  </a>
                </li>
              </ul>
            </li>
            <li>
              All photos are from <a href="https://unsplash.com/">Unsplash</a>
            </li>
          </FooterItem>
        </div>
        <FooterBottom />
      </div>
    );
  }
}

export default Footer;
