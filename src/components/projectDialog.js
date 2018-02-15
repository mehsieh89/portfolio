import React, { Component } from 'react';
import { Dialog, RaisedButton } from 'material-ui';

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
            <RaisedButton
              variant="raised"
              backgroundColor="#222"
              labelStyle={styles.buttonLabel}
              style={styles.repoButton}
              label='github repo'
              onClick={this.handleOnClick} />
          </div>
        </Dialog>
      );
    } else { return null }
  }
}


const styles = {
  buttonLabel: {
    textTransform: 'lowercase',
    fontFamily: 'Alcubierre',
    fontWeight: 'bold',
    fontSize: '20px',
    color: 'white',
    backgroundColor: '#222',
  },
  repoButton: {
    marginTop: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '175px',
    display: 'block',
  },
  title: {
    fontSize: '30px',
    fontWeight: 'bold',
    fontFamily: 'Alcubierre',
    textAlign: 'center',
    borderBottom: '5px solid #222',
  },
}

export default ProjectDialog;
