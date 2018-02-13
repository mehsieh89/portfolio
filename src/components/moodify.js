import React, { Component } from 'react';
import MoodifyImage from '../media/moodifyDemo.gif'

class Moodify extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.props.importProjectDialog({
      name: 'Moodify Web App',
      pathName: MoodifyImage,
      githubURL: 'https://github.com/ninjacodez/moodify',
    })
    this.props.toggleProjectDialog();
  }

  render() {
    return (
      <b className="project" onClick={this.handleOnClick.bind(this)}> Moodify </b>
    );
  }
}

export default Moodify;
