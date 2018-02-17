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
        height: '325',
        width: '500',
      },
      description: "What if I told you there is an app on the market that analyzes emotions portrayed in song lyrics",
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
