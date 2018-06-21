import React, { Component } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CommunityMobContainer from '../containers/communityMobContainer.js';

//import actions from above
//activate dialog on click
//style menu items with hover if possible
//adjust slide to correspond with hover

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchorEl: null,
    }
  }

  handleOnClick = (event) => {
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    })
    this.props.toggleProjectsHovering(true);
  }

  handleClose = () => {
    this.setState({
      open: false
    })
    this.props.toggleProjectsHovering(false);
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
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              width: 200,
            },
          }}
        >
          <CommunityMobContainer
            dialog={this.props.dialog}
            changeSliderIndex={this.props.changeSliderIndex}
            toggleProjectDialog={this.props.toggleProjectDialog}
            importProjectDialog={this.props.importProjectDialog}
            toggleProjectsHovering={this.props.toggleProjectsHovering}
          />
        </Menu>
      </div>
    );
  }
}

export default Projects;
