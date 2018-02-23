import React, { Component } from 'react';
import Resume from '../components/resume.js';

class ResumeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    };
    this.handleMouseHoverE = this.handleMouseHoverE.bind(this);
    this.handleMouseHoverL = this.handleMouseHoverL.bind(this);
  }

  handleMouseHoverE() {
    this.setState({ isHovering: true });
  }

  handleMouseHoverL() {
    this.setState({ isHovering: false });
  }

  render() {
    const isHovering = this.state.isHovering;
    let bar = null;
    if (isHovering) {
      bar = <div id="colorBar2"></div>;
    } else {
      bar = null;
    }

    return (
      <b className="selfButtonBox"
        onMouseEnter={this.handleMouseHoverE}
        onMouseLeave={this.handleMouseHoverL}
      >
        <Resume className="box"/>
        {bar}
      </b>
    );
  }
}

  export default ResumeContainer;
