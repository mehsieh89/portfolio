import React, { Component } from 'react';
// import { RaisedButton } from 'material-ui';
import CommunityWebDemo from '../media/communityWebDemo.gif'

class CommunityWeb extends Component {
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
      <div className="project" onClick={this.handleOnClick}> community web </div>
    );
  }
}

export default CommunityWeb;
