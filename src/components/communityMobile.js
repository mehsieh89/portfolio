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
      description: "Mobile variation of the Community application. Built for socialites who are already out and about or are feeling spontaneous."
    });
    this.props.toggleProjectDialog()
  }

  render() {
    return (
      <div className="project animated fadeIn communityMobile" onClick={this.handleOnClick.bind(this)}> community mobile </div>
    );
  }
}

export default CommunityMobile;
