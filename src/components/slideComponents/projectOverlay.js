import React, { Component } from 'react';

export default
class ProjectOverlay extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isHovering: false,
  //   }
  // }

  // mouseEnter = () => {
  //   this.setState({
  //     isHovering: true
  //   })
  // }
  //
  // mouseLeave = () => {
  //   this.setState({
  //     isHovering: false
  //   })
  // }

  render() {
    let overlayStyle;
    if (this.props.isHovering) {
      overlayStyle = {backgroundColor: "black"}
    } else {
      overlayStyle = {backgroundColor: "red"}
    }
    return (
      <div class="projectOverlay"
        style={overlayStyle}
        // onMouseEnter={this.mouseEnter}
        // onMouseLeave={this.mouseLeave}
      >
        Hello
      </div>
    );
  };
}
