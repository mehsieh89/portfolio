import React, { Component } from 'react';
import FridgrMobile from '../components/fridgrMobile.js';

class FridgrContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    };
    this.handleMouseHoverE = this.handleMouseHoverE.bind(this);
    this.handleMouseHoverL = this.handleMouseHoverL.bind(this);

  }

  handleMouseHoverE() {
    this.props.toggleHovering(2, true);
    this.props.changeSliderIndex(2);
  }

  handleMouseHoverL() {
    this.props.toggleHovering(2, false);
  }

  render() {
    const isHovering = this.state.isHovering;

    let bar = null;
    if (this.props.dialog.isHovering[2]) {
      bar = <div id="colorBar"></div>;
    } else {
      bar = null;
    }

    return (
      <b className="projectBox"
        onMouseEnter={this.handleMouseHoverE}
        onMouseLeave={this.handleMouseHoverL}
      >
        <FridgrMobile
          dialog={this.props.dialog}
          toggleProjectDialog={this.props.toggleProjectDialog}
          importProjectDialog={this.props.importProjectDialog}
        />
        {bar}
      </b>
    );
  }
}

export default FridgrContainer;
