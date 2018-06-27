import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';

class Thumbnail extends Component {
  handleClick = () => {
    this.props.changeSliderIndex(this.props.index);
  }

  render() {
    console.log(this.props.projectName);
    return (
      <span>
        <a>
          <img
            data-tip data-for={this.props.projectName}
            src={this.props.image}
            alt=""
            onClick={this.handleClick}
          />
        </a>
        <ReactTooltip
          id={this.props.projectName}
          effect='solid'
        >
          <span> {this.props.projectName} </span>
        </ReactTooltip>
      </span>
    );
  }
}

export default Thumbnail;
