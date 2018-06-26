import React, { Component } from 'react';
import ConnectFour from '../../media/connectFourMU.jpg';
import { connectFour } from '../projectData.js';

class ConnectFourSlide extends Component {

  handleOnClick = () => {
    this.props.importProjectDialog(connectFour);
    this.props.toggleProjectDialog();
    this.props.changeSliderIndex(4);
  }

  render() {
    return (
      <div id="sliderImgFrame">
        <img className="sliderImg" src={ConnectFour} onClick={this.handleOnClick} alt=""></img>
      </div>
    );
  }
}

export default ConnectFourSlide;
