import React, { Component } from 'react';
import { Dialog, RaisedButton } from 'material-ui';
import CommMob from '../media/communityMob.jpg';

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

    const layoutAdjust = () => {
      if (this.props.dialog.currentProject.name === "community mobile app") {
        return (
          <div id="dialogDivMob">
            <img id="communityMobImage" src={this.props.dialog.currentProject.pathName} alt=""></img>
            <div id="communityMobTxt">
              <p id="communityMobDesc"> {this.props.dialog.currentProject.description} </p>
              <img id="communityMobImage2" src={CommMob} alt=""></img>
              <RaisedButton
                backgroundColor="#222"
                labelStyle={styles.buttonLabel}
                style={styles.repoButton2}
                label='github repo'
                onClick={this.handleOnClick} />
            </div>
          </div>
        )
      } else {
        return (
          <div id="dialogDiv">
            <p className="projectDesc"> {this.props.dialog.currentProject.description} </p>
            <img className="projectIMG" src={this.props.dialog.currentProject.pathName} alt="" height={mediaHeight} width={mediaWidth}>
            </img>
            <RaisedButton
              backgroundColor="#222"
              labelStyle={styles.buttonLabel}
              style={styles.repoButton}
              label='github repo'
              onClick={this.handleOnClick} />
          </div>
        )
      }
    }


    if (this.props.dialog.showProjectDialog) {
      return (
        <Dialog
          bodyStyle={styles.body}
          autoDetectWindowHeight={true}
          title={this.props.dialog.currentProject.name}
          onRequestClose={this.handleClose}
          open={this.props.dialog.showProjectDialog}
          titleStyle={styles.title}
        >
          {layoutAdjust()}
        </Dialog>
      );
    } else { return null }
  }
}


const styles = {
  body: {
    backgroundColor: '#BEBEBE',
  },
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
  repoButton2: {
    marginTop: '10px',
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
    borderBottom: '2px solid #222',
  },
}

export default ProjectDialog;
