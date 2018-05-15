import React, { Component } from 'react';
import resume from '../media/resume.pdf';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    window.open(resume);
  }

  render() {
    return (
      <div className="selfButton animated zoomInLeft" onClick={this.handleOnClick.bind(this)}> resume </div>
    );
  }
}

export default Resume;
