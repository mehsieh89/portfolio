import React, { Component } from 'react';
import CommunityMobDemo from '../media/communityMobDemo.gif'

class CommunityMobile extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.props.importProjectDialog({
      name: 'community mobile app',
      pathName: CommunityMobDemo,
      githubURL: 'https://github.com/Warriorcodez/community-mobile',
      dimensions: {
        height: '',
        width: '',
      },
      description: "What if I told you there is an app on the market that allows you to explore social events and create events based on geolocation"
    });
    this.props.toggleProjectDialog()
  }

  render() {
    return (
      <div className="project" onClick={this.handleOnClick.bind(this)}> community mobile </div>
    );
  }
}

export default CommunityMobile;
