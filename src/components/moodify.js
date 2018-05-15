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
      description: "Moodify utilizes the Watson API to analyze emotions portrayed in song lyrics. Lyrics are pulled from MusixMatch and song clips are pulled from Spotify.",
    })
    this.props.toggleProjectDialog();
  }

  render() {
    return (
      <div className="project animated fadeInUpBig" onClick={this.handleOnClick.bind(this)}> moodify </div>
    );
  }
}

export default Moodify;
