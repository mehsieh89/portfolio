import React, { Component } from 'react';
import About from '../components/about.js';

class FridgrContainer extends Component {

  render() {
    return (
      <b className="projectBox">
        <span className="box">
          <About
            dialog={this.props.dialog}
            toggleAboutDialog={this.props.toggleAboutDialog}
          />
        </span>
        <div id="test"></div>
      </b>
    );
  }
}

  export default FridgrContainer;
