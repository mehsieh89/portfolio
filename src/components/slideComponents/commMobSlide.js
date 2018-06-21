import React, { Component } from 'react';
import CommunityMob from '../../media/ComMobSingleMU.jpg';
import { commMob } from '../projectData.js';

class CommMobSlide extends Component {
  constructor(props) {
    super(props);
  }

  handleOnClick = () => {
    this.props.importProjectDialog(commMob);
    this.props.toggleProjectDialog();
    this.props.changeSliderIndex(1);
  }

  render() {
    return (
      <div id="sliderImgFrame">
        <img className="sliderImg" src={CommunityMob} onClick={this.handleOnClick} alt=""></img>
      </div>
    );
  }
}

export default CommMobSlide;
