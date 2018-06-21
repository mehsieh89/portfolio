import React, { Component } from 'react';
import ConnectFour from '../../media/connectFourMUlarge.png';
import { connectFour } from '../projectData.js';

class ConnectFourSlide extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

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
