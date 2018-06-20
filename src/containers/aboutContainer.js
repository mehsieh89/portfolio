import React, { Component } from 'react';
import About from '../components/about.js';

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
    this.setState({ isHovering: true });
  }

  handleMouseHoverL() {
    this.setState({ isHovering: false });
  }

  render() {
    const isHovering = this.state.isHovering;

    let bar = null;
    if (isHovering) {
      bar = <div id="colorBar" className="animated zoomIn"></div>;
    } else {
      bar = null;
    }

    return (
      <b className="projectBox"
        onMouseEnter={this.handleMouseHoverE}
        onMouseLeave={this.handleMouseHoverL}
      >
        <About
          dialog={this.props.dialog}
          changeSliderIndex={this.props.changeSliderIndex}
          toggleAboutDialog={this.props.toggleAboutDialog}
        />
        {bar}
      </b>
    );
  }
}

  export default FridgrContainer;
