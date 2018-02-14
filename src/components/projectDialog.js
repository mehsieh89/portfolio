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
    const mediaHeight = this.props.dialog.currentProject.dimensions.height;
    const mediaWidth = this.props.dialog.currentProject.dimensions.width;
    console.log(mediaHeight);
    console.log(mediaWidth);


    if (this.props.dialog.showProjectDialog) {
      return (
        <Dialog
          title={this.props.dialog.currentProject.name}
          onRequestClose={this.handleClose}
          open={this.props.dialog.showProjectDialog}
          titleStyle={styles.title}
        >
          <div id="dialogDiv">
              <img className="projectIMG" src={this.props.dialog.currentProject.pathName} alt="" height={mediaHeight} width={mediaWidth}>
              </img>
            <RaisedButton id="RepoButton" label='Github Repo' onClick={this.handleOnClick} />
          </div>
          {/* <div id="description">
            What if I told you there was an app on the market that allowed you to see cool events in the area?
          </div> */}
        </Dialog>
      );
    } else { return null }
  }
}


const styles = {
  title: {
    fontSize: '26px',
    fontFamily: 'Alcubierre',
    textAlign: 'center',
  },
}

export default ProjectDialog;
