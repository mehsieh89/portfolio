import React, { Component } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

//add objects for each project with their criteria
//import actions from above
//activate dialog on click
//style menu items with hover if possible
//adjust slide to correspond with hover

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleOnClick = () => {
    this.setState({
      open: true
    })
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  render() {
    return (
      <div>
        <div className="project animated fadeIn projectsButton"
          onClick={this.handleOnClick}>
          projects
        </div>
        <Menu
          id="long-menu"
          open={this.state.open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              width: 200,
            },
          }}
        >
        </Menu>
      </div>
    );
  }
}

export default Projects;
