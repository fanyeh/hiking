import React, { Component } from 'react';
import FooterItem from './FooterItem';
import style from './index.css';
class Footer extends Component {
  render() {
    return (
      <div className={style.footer}>
        <div className={style.itemContainer}>
          <FooterItem title="Dolomia">
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
        </div>

        <div className={style.bottom}>
          <span>&copy; Dolomia - Hiking & Outdoor Html Template Handmade by puredesignThemes</span>
          <span>
            <i className="fab fa-twitter" />
            <i className="fab fa-facebook" />
            <i className="fab fa-google-plus-g" />
            <i className="fab fa-instagram" />
            <i className="fab fa-youtube" />
          </span>
        </div>
      </div>
    );
  }
}

export default Footer;
