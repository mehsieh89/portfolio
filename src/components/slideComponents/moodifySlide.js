import React, { Component } from 'react';
import Moodify from '../../media/moodifyMUlarge.png';
import { moodify } from '../projectData.js';

class MoodifySlide extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.props.importProjectDialog()
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
