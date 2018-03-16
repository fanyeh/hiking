import React, { Component } from 'react';
import ComponentHeader from '@components/ComponentHeader';
import style from './index.css';
class About extends Component {
  render() {
    return (
      <div className={style.about}>
        <ComponentHeader
          title="ABOUT US"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        />

        <p className={style.detail}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic reprehenderit eligendi dolor
          incidunt natus commodi doloribus culpa ad iusto suscipit dolores, ex obcaecati molestias,
          nulla consectetur dolore quas adipisci similique eaque provident. Nostrum, officiis cum
          facere iure et temporibus reprehenderit, vero laudantium numquam qui odit. Dolor et
          inventore earum, deleniti!
        </p>
        {/* Services */}
        <div className={style.services}>
          <div className={style.serviceItem}>
            <div>
              <img src={require('@img/cloud.svg')} className={style.icon} alt="" />
            </div>
            <h3>In Every Conditions</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem harum aspernatur
              sapiente error, voluptas fuga, laudantium ullam magni fugit. Qui!
            </p>
          </div>

          <div className={style.serviceItem}>
            <div>
              <img src={require('@img/backpack.svg')} className={style.icon} alt="" />
            </div>
            <h3>Professional Team</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem harum aspernatur
              sapiente error, voluptas fuga, laudantium ullam magni fugit. Qui!
            </p>
          </div>
          <div className={style.serviceItem}>
            <div>
              <img src={require('@img/knife.svg')} className={style.icon} alt="" />
            </div>
            <h3>Expert hikers</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem harum aspernatur
              sapiente error, voluptas fuga, laudantium ullam magni fugit. Qui!
            </p>
          </div>
        </div>
        {/* Show treks */}
        <div className={style.imageContainer}>
          <div className={style.imageWrapper}>
            <img src={require('../../frontpage0.jpg')} alt="" />
          </div>

          <div className={style.imageWrapper}>
            <img src={require('../../frontpage0.jpg')} alt="" />
          </div>

          <div className={style.imageWrapper}>
            <img src={require('../../frontpage0.jpg')} alt="" />
          </div>

          <div className={style.imageWrapper}>
            <img src={require('../../frontpage0.jpg')} alt="" />
          </div>

          <div className={style.imageWrapper}>
            <img src={require('../../frontpage0.jpg')} alt="" />
          </div>

          <div className={style.imageWrapper}>
            <img src={require('../../frontpage0.jpg')} alt="" />
          </div>

          <div className={style.imageWrapper}>
            <img src={require('../../frontpage0.jpg')} alt="" />
          </div>

          <div className={style.imageWrapper}>
            <img src={require('../../frontpage0.jpg')} alt="" />
          </div>

          <div className={style.imageWrapper}>
            <img src={require('../../frontpage0.jpg')} alt="" />
          </div>

          <div className={style.imageWrapper}>
            <img src={require('../../frontpage0.jpg')} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
