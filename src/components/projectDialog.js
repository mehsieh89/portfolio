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
          titleStyle={{ fontFamily: 'Alcubierre' }}
        >
          <img className="projectIMG" src={this.props.dialog.currentProject.pathName} alt="" height="300" width="225" >
          </img>
          <RaisedButton id="RepoButton" label='Github Repo' onClick={this.handleOnClick} />
          <div id="description">
            <div> What if I told you there was an app on the market that allowed you to see cool events in the area? </div>
          </div>
        </Dialog>
      );
    } else { return null }
  }
}

export default ProjectDialog;
