import React, { Component } from 'react';
import CommunityWeb from '../../media/CommWebMU.jpeg';
import { commWeb } from '../projectData.js';
import ProjectOverlay from './projectOverlay.js';


class CommWebSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    }
  }

  handleOnClick = () => {
    this.props.importProjectDialog(commWeb);
    this.props.toggleProjectDialog();
    this.props.changeSliderIndex(0);
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

  // mouseEnter = () => {
  //   console.log('meow');
  // }

  render() {
    return (
      <div id="sliderImgFrame"
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        {this.overlayRender()}
        <img className="sliderImg" src={CommunityWeb} onClick={this.handleOnClick} alt=""></img>
      </div>
    );
  }
}

export default CommWebSlide;
