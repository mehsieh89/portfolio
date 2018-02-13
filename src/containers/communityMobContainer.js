import React, { Component } from 'react';
import CommunityMobile from '../components/communityMobile.js';

class CommunityMobContainer extends Component {

  render() {
    return (
      <b className="projectBox">
        <span className="box">
          <CommunityMobile
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

export default CommunityMobContainer;
