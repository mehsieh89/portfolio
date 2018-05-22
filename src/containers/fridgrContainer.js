import React, { Component } from 'react';
import FridgrMobile from '../components/fridgrMobile.js';

class FridgrContainer extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHoverE = this.handleMouseHoverE.bind(this);

  }

  handleMouseHoverE() {
    this.props.toggleHovering(2, true);
    this.props.toggleHovering(1, false);
    this.props.toggleHovering(0, false);
    this.props.toggleHovering(3, false);
    this.props.changeSliderIndex(2);
  }

  render() {
    let bar = null;
    if (this.props.dialog.isHovering[2]) {
      bar = <div id="colorBar" className="animated zoomIn"></div>;
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
