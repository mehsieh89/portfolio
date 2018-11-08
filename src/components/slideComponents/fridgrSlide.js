import React, { Component } from 'react';
import FridgrMobMU from '../../media/fridgrMU.jpg';
import { fridgr } from '../projectData.js';
import ProjectOverlay from './projectOverlay.js';

class FridgrSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    }
  }

  handleOnClick = () => {
    this.props.importProjectDialog(fridgr);
    this.props.toggleProjectDialog();
    this.props.changeSliderIndex(2);
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
      >
        {this.overlayRender()}
        <img className="sliderImg" src={FridgrMobMU} onClick={this.handleOnClick} alt=""></img>
      </div>
    );
  }
}

export default FridgrSlide;
