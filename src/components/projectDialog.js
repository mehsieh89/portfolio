import React, { Component } from 'react';
import { Dialog } from 'material-ui';
// import { RaisedButton } from 'material-ui';

class ProjectDialog extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.toggleProjectDialog();
  }

  render() {
    if (this.props.dialog.showProjectDialog) {
      return (
        <Dialog
          title="project name"
          onRequestClose={this.handleClose}
          open={this.props.dialog.showProjectDialog}
        >
          <img src="http://bit.ly/2sS0lLH" alt="" height="300" width="225" >
          </img>
        </Dialog>
      );
    } else {return null }
  }
}

export default ProjectDialog;
