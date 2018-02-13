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
      name: 'Community Web App',
      pathName: CommunityWebDemo,
      githubURL: 'https://github.com/Warriorcodez/community',
    })
    this.props.toggleProjectDialog();
  }

  render() {
    return (
      <div className="project" onClick={this.handleOnClick}> community web </div>
    );
  }
}

export default CommunityWeb;
