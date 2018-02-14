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
      }
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
