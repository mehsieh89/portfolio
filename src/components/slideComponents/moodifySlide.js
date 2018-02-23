import React, { Component } from 'react';
// import { RaisedButton } from 'material-ui';
import CommunityWeb from '../../media/communityWeb.png';


class MoodifySlide extends Component {
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

export default MoodifySlide;
