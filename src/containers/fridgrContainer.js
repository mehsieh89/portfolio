import React, { Component } from 'react';
import FridgrMobile from '../components/fridgrMobile.js';

class FridgrContainer extends Component {

  render() {
    return (
      <b className="projectBox">
        <span className="box">
          <FridgrMobile
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

export default FridgrContainer;
