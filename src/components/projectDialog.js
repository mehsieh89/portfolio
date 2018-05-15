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
            </div>
          </div>
        )
      } else {
        return (
          <div id="dialogDiv">
            <p className="projectDesc"> {this.props.dialog.currentProject.description} </p>
            <img className="projectIMG" src={this.props.dialog.currentProject.pathName} alt="" height={mediaHeight} width={mediaWidth}>
            </img>
          </div>
        )
      }
    }


    if (this.props.dialog.showProjectDialog) {
      return (
        <Dialog
          bodyStyle={styles.body}
          autoDetectWindowHeight={true}
          onRequestClose={this.handleClose}
          open={this.props.dialog.showProjectDialog}
          titleStyle={styles.title}
          title={
            <div id="dialogTitleContainer">
              <div id="aboutTitle" className="animated lightSpeedIn"> {this.props.dialog.currentProject.name} </div>
              <RaisedButton
                className="animated fadeIn"
                backgroundColor="#C7D8C6"
                labelStyle={styles.buttonLabel}
                style={styles.repoButton}
                label='github repo'
                onClick={this.handleOnClick}
              />
            </div>
          }>
          {layoutAdjust()}
        </Dialog>
      );
    } else { return null }
  }
}


const styles = {
  body: {
    // backgroundColor: '#CCCBC6',
  },
  buttonLabel: {
    textTransform: 'lowercase',
    fontFamily: "HelveticaNeue",
    fontWeight: 'bold',
    fontSize: '20px',
    color: 'white',
    // backgroundColor: '#C7D8C6',
  },
  repoButton: {
    position: 'absolute',
    right: '20px',
    width: '175px',
    display: 'block',
  },
  title: {
    fontSize: '30px',
    fontWeight: 'bold',
    color: 'white',
    fontFamily: "HelveticaNeue",
    textAlign: 'center',
    backgroundColor: '#A9B7C0' ,
    // borderBottom: '2px solid #CCCBC6',
  },
}

export default ProjectDialog;
