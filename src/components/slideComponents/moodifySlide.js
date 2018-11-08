import React, { Component } from 'react';
import Moodify from '../../media/moodifyMU.jpg';
import { moodify } from '../projectData.js'
import ProjectOverlay from './projectOverlay.js';

class MoodifySlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    }
  }

  handleOnClick = () => {
    this.props.importProjectDialog(moodify);
    this.props.toggleProjectDialog();
    this.props.changeSliderIndex(3);
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
        <img className="sliderImg" src={Moodify} onClick={this.handleOnClick} alt=""></img>
      </div>
    );
  }
}

export default MoodifySlide;
