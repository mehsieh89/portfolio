import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.props.toggleAboutDialog();
    this.props.changeSliderIndex(this.props.dialog.sliderIndex);
  }

  render() {
    return (
      <div className="selfButton animated fadeIn aboutAnimation" onClick={this.handleOnClick}> contact </div>
    );
  }
}

export default About;
