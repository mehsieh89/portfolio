import React, { Component } from 'react';
import resume from '../media/resume.pdf';

class Resume extends Component {
  constructor(props) {
    super(props);
  }

  handleOnClick = () => {
    window.open(resume);
  }

  render() {
    return (
      <div className="project animated fadeIn resumeButton" onClick={this.handleOnClick}> resume </div>
    );
  }
}

export default Resume;
