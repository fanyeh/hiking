import React, { Component } from 'react';
import style from './index.css';
class About extends Component {
  render() {
    return (
      <div className={style.container}>
        <h1>ABOUT US</h1>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic reprehenderit eligendi dolor
          incidunt natus commodi doloribus culpa ad iusto suscipit dolores, ex obcaecati molestias,
          nulla consectetur dolore quas adipisci similique eaque provident. Nostrum, officiis cum
          facere iure et temporibus reprehenderit, vero laudantium numquam qui odit. Dolor et
          inventore earum, deleniti!
        </p>
        {/* Services */}
        <div className={style.services}>
          <div className={style.serviceItem}>
            <div>Icon</div>
            <h2>In Every Conditions</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem harum aspernatur
              sapiente error, voluptas fuga, laudantium ullam magni fugit. Qui!
            </p>
          </div>

          <div className={style.serviceItem}>
            <div>Icon</div>
            <h2>Professional Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem harum aspernatur
              sapiente error, voluptas fuga, laudantium ullam magni fugit. Qui!
            </p>
          </div>
          <div className={style.serviceItem}>
            <div>Icon</div>
            <h2>Expert hikers</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem harum aspernatur
              sapiente error, voluptas fuga, laudantium ullam magni fugit. Qui!
            </p>
          </div>
        </div>
        {/* Show treks */}
        <div>
          <div className={style.imageContainer}>
            <div className={style.imageWrapper}>
              <img src={require('../../frontpage0.jpg')} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
