import React, { Component } from 'react';

class About extends Component {

  handleOnClick = () => {
    this.props.toggleAboutDialog();
    this.props.changeSliderIndex(this.props.dialog.sliderIndex);
  }

  render() {
    return (
      <div className="project animated fadeIn contactButton" onClick={this.handleOnClick}> contact </div>
    );
  }
}

export default About;
