import React, { Component } from 'react';
import About from '../components/about.js';

class FridgrContainer extends Component {
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
        <About
          dialog={this.props.dialog}
          toggleAboutDialog={this.props.toggleAboutDialog}
        />
        {bar}
      </b>
    );
  }
}

  export default FridgrContainer;
