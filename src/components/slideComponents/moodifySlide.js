import React, { Component } from 'react';
import Moodify from '../../media/moodifyMUjpg';
import { moodify } from '../projectData.js';

class MoodifySlide extends Component {

  handleOnClick = () => {
    this.props.importProjectDialog(moodify);
    this.props.toggleProjectDialog();
    this.props.changeSliderIndex(3);
  }

  render() {
    return (
      <div id="sliderImgFrame">
        <img className="sliderImg" src={Moodify} onClick={this.handleOnClick} alt=""></img>
      </div>
    );
  }
}

export default MoodifySlide;
