import React, { Component } from 'react';
import Moodify from '../components/moodify.js';

class MoodifyContainer extends Component {

  render() {
    return (
      <b className="projectBox">
        <span className="box">
          <Moodify
            dialog={this.props.dialog}
            toggleProjectDialog={this.props.toggleProjectDialog}
            importProjectDialog={this.props.importProjectDialog}
          />
        </span>
        <div id="test"></div>
      </b>
    );
  }
}

export default MoodifyContainer;
