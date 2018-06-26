import React, { Component } from 'react';
import FridgrMobMU from '../../media/fridgrMU.jpg';
import { fridgr } from '../projectData.js';

class FridgrSlide extends Component {

  handleOnClick = () => {
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
