import React, { Component } from 'react';
import Moodify from '../components/moodify.js';

class MoodifyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    };
    this.handleMouseHoverE = this.handleMouseHoverE.bind(this);
    this.handleMouseHoverL = this.handleMouseHoverL.bind(this);

  }

  handleMouseHoverE() {
    this.props.toggleHovering(3, true);
    this.props.toggleHovering(1, false);
    this.props.toggleHovering(2, false);
    this.props.toggleHovering(0, false);
    this.props.changeSliderIndex(3);
  }

  handleMouseHoverL() {
    this.props.toggleHovering(3, false);
  }

  render() {
    const isHovering = this.state.isHovering;

    let bar = null;
    if (this.props.dialog.isHovering[3]) {
      bar = <div id="colorBar" className="animated zoomIn"></div>;
    } else {
      bar = null;
    }

    return (
      <b className="projectBox"
        onMouseEnter={this.handleMouseHoverE}
        onMouseLeave={this.handleMouseHoverL}
      >
        <Moodify
          dialog={this.props.dialog}
          toggleProjectDialog={this.props.toggleProjectDialog}
          importProjectDialog={this.props.importProjectDialog}
        />
        {bar}
      </b>
    );
  }
}

export default MoodifyContainer;
