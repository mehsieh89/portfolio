import React, { Component } from 'react';
import CommunityWeb from '../../media/CommWebMU.jpeg';
import { commWeb } from '../projectData.js';


class CommWebSlide extends Component {
  constructor(props) {
    super(props);
  }

  handleOnClick = () => {
    this.props.importProjectDialog(commWeb);
    this.props.toggleProjectDialog();
    this.props.changeSliderIndex(0);
  }

  render() {
    return (
      <div id="sliderImgFrame">
        <img className="sliderImg" src={CommunityWeb} onClick={this.handleOnClick} alt=""></img>
      </div>
    );
  }
}

export default CommWebSlide;
