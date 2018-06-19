import React, { Component } from 'react';

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  handleOnClick() {

  }

  render() {
    return (
      <div className="project animated fadeIn projectsButton" onClick={this.handleOnClick.bind(this)}> projects </div>
    );
  }
}

export default Projects;
