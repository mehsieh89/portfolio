import React, { Component } from 'react';
import CommunityWeb from '../../media/communityWeb.png';

class CommWebSlide extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    // this.props.toggleAboutDialog();
  }

  render() {
    return (
        <img className="sliderImg" src={CommunityWeb}></img>
    );
  }
}

export default CommWebSlide;
