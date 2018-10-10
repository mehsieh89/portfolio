import React, { Component } from 'react';
import CommunityWeb from '../../media/CommWebMU.jpeg';
import { commWeb } from '../projectData.js';


class CommWebSlide extends Component {

  handleOnClick = () => {
    this.props.importProjectDialog(commWeb);
    this.props.toggleProjectDialog();
    this.props.changeSliderIndex(0);
  }

  // mouseEnter = () => {
  //   console.log('meow');
  // }

  render() {
    return (
      <div id="sliderImgFrame">
        <img className="sliderImg" src={CommunityWeb} onClick={this.handleOnClick} alt=""></img>
      </div>
    );
  }
}

export default CommWebSlide;
