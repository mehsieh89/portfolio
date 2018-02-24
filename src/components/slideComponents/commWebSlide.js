import React, { Component } from 'react';
import CommunityWeb from '../../media/communityWeb.png';
import CommunityWebDemo from '../../media/communityWebDemo.gif'

class CommWebSlide extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.props.importProjectDialog({
      name: 'community web app',
      pathName: CommunityWebDemo,
      githubURL: 'https://github.com/Warriorcodez/community',
      dimensions: {
        height: '325px',
        width: '500px',
      },
      description: "What if I told you there is an app on the market that allows you to explore and create social events based on geolocation.",
    });
    this.props.toggleProjectDialog();
  }

  render() {
    return (
        <img className="sliderImg" src={CommunityWeb} onClick={this.handleOnClick}></img>
    );
  }
}

export default CommWebSlide;
