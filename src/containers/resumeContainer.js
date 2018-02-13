import React, { Component } from 'react';
import Resume from '../components/resume.js';

class ResumeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    };
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.toggleHoverState = this.toggleHoverState.bind(this);
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState() {
    return {
      isHovering: !this.state.isHovering,
    };
  }

  render() {
    const isHovering = this.state.isHovering;
    let bar = null;
    if (isHovering) {
      bar = <div id="colorBar"></div>;
    } else {
      bar = null;
    }

    return (
      <b className="projectBox"
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
      >
        <Resume className="box"/>
        {bar}
      </b>
    );
  }
}

  export default ResumeContainer;
