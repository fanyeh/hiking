import React, { Component } from 'react';

class SliderController extends Component {
  render() {
    return (
      <div>
        <div className="slideLeft">
          <button>
            <i class="fas fa-angle-left fa-2x" />
          </button>
        </div>
        <div className="slideRight">
          <button>
            <i class="fas fa-angle-right fa-2x" />
          </button>
        </div>
      </div>
    );
  }
}

export default SliderController;
