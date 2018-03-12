import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import SliderController from './SliderController';
import SliderImage from './SliderImage';
import style from './index.css';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: <SliderImage sourceID={0} />,
      imageSourceID: 0,
    };
  }

  slide(direction) {
    if (direction === 'left') {
      this.transitionStyle = {
        enter: style.enterLeft,
        enterActive: style.enterActive,
        exit: style.exit,
        exitActive: style.exitActiveLeft,
      };
    } else {
      this.transitionStyle = {
        enter: style.enterRight,
        enterActive: style.enterActive,
        exit: style.exit,
        exitActive: style.exitActiveRight,
      };
    }
    let imageSourceID = this.state.imageSourceID + 1;
    this.setState({
      currentImage: <SliderImage sourceID={imageSourceID} />,
      imageSourceID: imageSourceID,
    });
  }

  render() {
    console.log(this.transitionStyle);
    const currentImage = this.state.currentImage;
    return (
      <div className={style.slider}>
        <TransitionGroup
          className={style.transitionGroup}
          childFactory={child =>
            React.cloneElement(child, {
              classNames: this.transitionStyle,
              timeout: 2000,
            })
          }
        >
          <CSSTransition key={currentImage.props.sourceID}>{currentImage}</CSSTransition>
        </TransitionGroup>
        <SliderController onClick={direction => this.slide(direction)}>
          <div className={style.info}>
            <h1>Wild nature safe adventure</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate aliquam
              aspernatur architecto tempora ipsum deleniti,
            </p>
            <div className={style.moreInfo}>
              <button>More Info</button>
            </div>
          </div>
        </SliderController>
      </div>
    );
  }
}

export default Slider;
