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
    // this.toggleHoverState = this.toggleHoverState.bind(this);
  }

  handleMouseHoverE() {
    this.setState({ isHovering: true });
  }

  handleMouseHoverL() {
    this.setState({ isHovering: false });
  }

  // toggleHoverState() {
  //   return {
  //     isHovering: !this.state.isHovering,
  //   };
  // }

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
