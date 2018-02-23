import React, { Component } from 'react';
// import { RaisedButton } from 'material-ui';
import CommunityMob from '../../media/communityMob.jpg';


class CommMobSlide extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    // this.props.toggleAboutDialog();
  }

  render() {
    return (
      <img id="sliderImgCommMob" src={CommunityMob}></img>
    );
  }
}

export default CommMobSlide;
