import React, { Component } from 'react';
import CommunityWeb from '../components/communityWeb.js';

var check = false;

class CommunityWebContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    };
    this.handleMouseHoverE = this.handleMouseHoverE.bind(this);
    this.handleMouseHoverL = this.handleMouseHoverL.bind(this);

  }

  componentDidUpdate() {
    console.log('meow');
    if (this.props.dialog.sliderIndex === 0) {
      check = true;
    } else {
      check = false;
    }
  }

  handleMouseHoverE() {
    this.setState({ isHovering: true });
    this.props.changeSliderIndex(0);
  }

  handleMouseHoverL() {
    this.setState({ isHovering: false });
    // this.props.changeSliderIndex(null);
  }

  render() {
    const isHovering = this.state.isHovering;

    let bar = null;
    if (isHovering || check) {
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
