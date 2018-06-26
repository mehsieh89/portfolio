import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';

class Thumbnail extends Component {
  handleClick = () => {
    this.props.changeSliderIndex(this.props.index);
  }

  render() {
    return (
      <a>
        <Tooltip id="tooltip-top-start" title={this.props.projectName} placement="top">
          <img src={this.props.image}
            alt=""
            onClick={this.handleClick}
          />
        </Tooltip>
      </a>
    );
  }
}

export default Thumbnail;
