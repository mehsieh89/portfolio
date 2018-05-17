import React, { Component } from 'react';
import CommunityMobile from '../components/communityMobile.js';

class CommunityMobContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    };
    this.handleMouseHoverE = this.handleMouseHoverE.bind(this);
    this.handleMouseHoverL = this.handleMouseHoverL.bind(this);
  }

  handleMouseHoverE() {
    this.props.toggleHovering(1, true);
    this.props.changeSliderIndex(1);
  }

  handleMouseHoverL() {
    this.props.toggleHovering(1, false);
  }

  render() {
    const isHovering = this.state.isHovering;

    let bar = null;
    if (this.props.dialog.isHovering[1]) {
      bar = <div id="colorBar"></div>;
    } else {
      bar = null;
    }

    return (
      <b className="projectBox"
        onMouseEnter={this.handleMouseHoverE}
        onMouseLeave={this.handleMouseHoverL}
      >
        <CommunityMobile
          dialog={this.props.dialog}
          toggleProjectDialog={this.props.toggleProjectDialog}
          importProjectDialog={this.props.importProjectDialog}
        />
        {bar}
      </b>
    );
  }
}

export default CommunityMobContainer;
