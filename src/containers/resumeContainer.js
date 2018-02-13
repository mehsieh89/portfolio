import React, { Component } from 'react';
import Resume from '../components/resume.js';

class ResumeContainer extends Component {

  render() {
    return (
      <b className="projectBox">
        <span className="box">
          <Resume/>
        </span>
        <div id="test"></div>
      </b>
    );
  }
}

  export default ResumeContainer;
