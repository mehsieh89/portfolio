import React, { Component } from 'react';
import { Dialog } from 'material-ui';
import { RaisedButton } from 'material-ui';

class ProjectDialog extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    window.open(this.props.dialog.currentProject.githubURL);
  }

  handleClose() {
    this.props.toggleProjectDialog();
  }

  render() {
    if (this.props.dialog.showProjectDialog) {
      return (
        <Dialog
          title={this.props.dialog.currentProject.name}
          onRequestClose={this.handleClose}
          open={this.props.dialog.showProjectDialog}
        >
          <img src={this.props.dialog.currentProject.pathName} alt="" height="300" width="225" >
          </img>
          <RaisedButton label='Github Repo' onClick={this.handleOnClick} />
        </Dialog>
      );
    } else {return null }
  }
}

export default ProjectDialog;
