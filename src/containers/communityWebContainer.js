import React, { Component } from 'react';
import CommunityWeb from '../components/communityWeb.js';

class CommunityWebContainer extends Component {

  render() {
    return (
      <b className="projectBox">
        <span className="box">
          <CommunityWeb
            dialog={this.props.dialog}
            toggleProjectDialog={this.props.toggleProjectDialog}
            importProjectDialog={this.props.importProjectDialog}
          />
        </span>
        <div id="test"></div>
      </b>
    );
  }
}

export default CommunityWebContainer;
