import React, { Component } from 'react';
import CommunityWeb from '../components/communityWeb.js';

class CommunityWebContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    };
    this.handleMouseHoverE = this.handleMouseHoverE.bind(this);
    this.handleMouseHoverL = this.handleMouseHoverL.bind(this);
    this.checkHover = this.checkHover.bind(this);

  }

  handleMouseHoverE() {
    this.setState({ isHovering: true });
    this.props.projectIsHovered(0, true);
    this.props.changeSliderIndex(0);
  }

  handleMouseHoverL() {
    this.setState({ isHovering: false });
    this.props.projectIsHovered(0, false);
  }

  checkHover() {
    return this.props.dialog.hoverOn.on && this.props.dialog.hoverOn === 1;
  }

  render() {
    const isHovering = this.state.isHovering;

    let bar = null;
    if (isHovering || this.checkHover()) {
      bar = <div id="colorBar"></div>;
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
