import React, { Component } from 'react';
import ServiceItem from './ServiceItem';
import ComponentHeader from '@components/ComponentHeader';
import style from './index.css';
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.createImages(),
    };
    this.updateImages = this.updateImages.bind(this);
  }

  componentWillMount() {
    window.addEventListener('resize', this.updateImages);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateImages);
  }

  updateImages() {
    this.setState({
      images: this.createImages(),
    });
  }

  createImages() {
    let images = [];
    const qty = this.calcImageQty();
    for (let i = 1; i <= qty; i++) {
      images.push(
        <div key={i} className={style.imageWrapper}>
          <img src={require(`@img/about/about${i}.jpg`)} alt="" />
        </div>,
      );
    }
    return images;
  }

  calcImageQty() {
    const screenWidth = window.screen.availWidth;
    let qty = screenWidth < 768 ? 2 : screenWidth < 1024 ? 5 : screenWidth < 1280 ? 6 : 8;
    return qty;
  }

  render() {
    const { images } = this.state;
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
        <div className={style.service}>
          <ServiceItem imageSource={require('@img/cloud.svg')} title="In Every Conditions">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem harum aspernatur
            sapiente error, voluptas fuga, laudantium ullam magni fugit. Qui!
          </ServiceItem>

          <ServiceItem imageSource={require('@img/backpack.svg')} title="Professional Team">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem harum aspernatur
            sapiente error, voluptas fuga, laudantium ullam magni fugit. Qui!
          </ServiceItem>

          <ServiceItem imageSource={require('@img/knife.svg')} title="Expert hikers">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem harum aspernatur
            sapiente error, voluptas fuga, laudantium ullam magni fugit. Qui!
          </ServiceItem>
        </div>
        <div className={style.imageContainer}>{images}</div>
      </div>
    );
  }
}

export default About;
