import React, { Component } from 'react';
import FridgrMobMU from '../../media/fridgrMUlarge.png';
import { fridgr } from '../projectData.js';

class FridgrSlide extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.props.importProjectDialog(fridgr);
    this.props.toggleProjectDialog();
    this.props.changeSliderIndex(2);
  }

  render() {
    return (
      <div id="sliderImgFrame">
        <img className="sliderImg" src={FridgrMobMU} onClick={this.handleOnClick} alt=""></img>
      </div>
    );
  }
}

export default FridgrSlide;
