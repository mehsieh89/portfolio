import React, { Component } from 'react';

export default
class ProjectOverlay extends Component {

  render() {
    let overlayStyle = {opacity: "0"};
    if (this.props.isHovering) {
      overlayStyle = {backgroundColor: "rgba(50, 50, 50, 0.7)"}
    }
    return (
      <div class="projectOverlay"
        style={overlayStyle}
      >
        <p>Hello</p>
      </div>
    );
  };
}
