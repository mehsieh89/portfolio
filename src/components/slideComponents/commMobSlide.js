import React, { Component } from 'react';
import CommunityMob from '../../media/ComMobSingleMU.jpg';
import { commMob } from '../projectData.js';
import ProjectOverlay from './projectOverlay.js';

class CommMobSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    }
  }

  handleOnClick = () => {
    this.props.importProjectDialog(commMob);
    this.props.toggleProjectDialog();
    this.props.changeSliderIndex(1);
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
        <img className="sliderImg" src={CommunityMob} alt=""></img>
      </div>
    );
  }
}

export default CommMobSlide;
