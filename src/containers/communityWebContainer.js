import React, { Component } from 'react';
import CommunityWeb from '../components/communityWeb.js';

class CommunityWebContainer extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHoverE = this.handleMouseHoverE.bind(this);
    this.handleMouseHoverL = this.handleMouseHoverL.bind(this);

  }

  handleMouseHoverE() {
    this.props.toggleHovering(0, true);
    this.props.toggleHovering(1, false);
    this.props.toggleHovering(2, false);
    this.props.toggleHovering(3, false);
    this.props.changeSliderIndex(0);
  }

  handleMouseHoverL() {
    this.props.toggleHovering(0, false);
  }

  render() {
    let bar = null;
    if (this.props.dialog.isHovering[0]) {
      bar = <div id="colorBar" className="animated zoomIn"></div>;
    } else {
      bar = null;
    }

    return (
      <b className="projectBox"
        onMouseEnter={this.handleMouseHoverE}
        onMouseLeave={this.handleMouseHoverL}
      >
        <CommunityWeb
          dialog={this.props.dialog}
          toggleProjectDialog={this.props.toggleProjectDialog}
          importProjectDialog={this.props.importProjectDialog}
        />
        {bar}
      </b>
    );
  }
}

export default CommunityWebContainer;
