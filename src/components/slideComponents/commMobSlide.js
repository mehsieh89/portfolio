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



  render() {
    return (
      <div id="sliderImgFrame"
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        <ProjectOverlay
          isHovering={this.state.isHovering}
        />
        <img className="sliderImg" src={CommunityMob} onClick={this.handleOnClick} alt=""></img>
      </div>
    );
  }
}

export default CommMobSlide;
