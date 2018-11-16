import React, { Component } from 'react';
import ConnectFour from '../../media/connectFourMU.jpg';
import { connectFour } from '../projectData.js';
import ProjectOverlay from './projectOverlay.js';

class ConnectFourSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    }
  }

  handleOnClick = () => {
    this.props.importProjectDialog(connectFour);
    this.props.toggleProjectDialog();
    this.props.changeSliderIndex(4);
  }

  mouseEnter = () => {
    this.setState({
      isHovering: true
    })
  }

  mouseLeave = () => {
    this.setState({
      isHovering: false
    })
  }

  overlayRender = () => {
    if (this.state.isHovering) {
      return (
        <ProjectOverlay
          isHovering={this.state.isHovering}
        />
      )
    }
  }

  render() {
    return (
      <div id="sliderImgFrame"
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
        onClick={this.handleOnClick}
      >
        {this.overlayRender()}
        <img className="sliderImg" src={ConnectFour} alt=""></img>
      </div>
    );
  }
}

export default ConnectFourSlide;
