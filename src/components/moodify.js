import React, { Component } from 'react';
import MoodifyImage from '../media/moodifyDemo.gif'

class Moodify extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.props.importProjectDialog({
      name: 'moodify web app',
      pathName: MoodifyImage,
      githubURL: 'https://github.com/ninjacodez/moodify',
      dimensions: {
        height: '350',
        width: '550',
      }
    })
    this.props.toggleProjectDialog();
  }

  render() {
    return (
      <div className="project" onClick={this.handleOnClick.bind(this)}> moodify </div>
    );
  }
}

export default Moodify;
