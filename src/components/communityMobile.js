import React, { Component } from 'react';
import { commMob } from './projectData.js';
import MenuItem from '@material-ui/core/MenuItem';

class CommunityMobile extends Component {
  constructor(props) {
    super(props);
  }

  handleOnClick = () => {
    this.props.importProjectDialog(commMob);
    this.props.toggleProjectDialog()
    this.props.toggleProjectsHovering(true);
  }

  render() {
    return (
      <MenuItem onClick={this.handleOnClick}>community mobile</MenuItem>
    );
  }
}

export default CommunityMobile;
