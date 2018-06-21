import React, { Component } from 'react';
import Projects from '../components/projects.js';

class ProjectContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleMouseHoverE = () => {
    this.props.toggleProjectsHovering(true);
  }

  handleMouseHoverL = () => {
    this.props.toggleProjectsHovering(false);
  }

  render() {

    let bar = null;
    if (this.props.dialog.projectsHover) {
      bar = <div id="colorBar" className="animated zoomIn"></div>;
    } else {
      bar = null;
    }

    return (
      <b className="projectBox"
        onMouseEnter={this.handleMouseHoverE}
        onMouseLeave={this.handleMouseHoverL}
      >
        <Projects
          dialog={this.props.dialog}
          changeSliderIndex={this.props.changeSliderIndex}
          toggleProjectDialog={this.props.toggleProjectDialog}
          importProjectDialog={this.props.importProjectDialog}
          toggleProjectsHovering={this.props.toggleProjectsHovering}
        />
        {bar}
      </b>
    );
  }
}

  export default ProjectContainer;
