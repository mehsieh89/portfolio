import React, { Component } from 'react';
import CommunityMobDemo from '../media/communityMobDemo.gif'

class CommunityMobile extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.props.importProjectDialog({
      name: 'Community Mobile App',
      pathName: CommunityMobDemo,
      githubURL: 'https://github.com/Warriorcodez/community-mobile',
    })
    this.props.toggleProjectDialog();
  }

  render() {
    return (
        <b className="project" onClick={this.handleOnClick.bind(this)}> Community Mobile </b>
    );
  }
}

export default CommunityMobile;
