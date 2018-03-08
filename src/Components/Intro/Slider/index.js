import React, { Component } from 'react';
import SliderController from './SliderController';

class Slider extends Component {
  render() {
    return (
      <div>
        <img src="" alt="" />
        <SliderController />
        <div className="info">
          <h1>Title</h1>
          <span>Description</span>
        </div>
        <button>More Info</button>
      </div>
    );
  }
}

export default Slider;
