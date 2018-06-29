import React, { Component } from 'react';
import { Dialog } from 'material-ui';
import CommMob from '../media/communityMob.jpg';
import FontAwesome from 'react-fontawesome';
import ReactTooltip from 'react-tooltip';

class ProjectDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
      normal: "white",
      hovered: "#A9B7C0"
    }
  }

  componentWilMount = () => {
    if (this.props.dialog.showProjectDialog) {
      this.props.toggleProjectsDialog(true);
    }
  }

  handleOnClick = () => {
    window.open(this.props.dialog.currentProject.githubURL);
  }

  handleClose = () => {
    this.props.toggleProjectDialog();
  }

  onMouseEnter = () => {
    this.setState({ isHovering: true });
  }

  onMouseLeave = () => {
    this.setState({ isHovering: false });
  }

  handleConnectFourClick = () => {
    window.open('https://mehsieh89.github.io/connectFour/')
  }

  renderCheck = () => {
    if (this.state.isHovering) {
      return (<ReactTooltip
                delayShow={200}
                place="left"
                className='projectTooltip animated fadeIn'
                id="githubCode"
                effect='solid'
                border={true}
              >
                <span> Click here for the codebase! </span>
              </ReactTooltip>)
    } else {
      return null;
    }
  }

  connectFourCheck = () => {
    const mediaHeight = this.props.dialog.currentProject.dimensions.height;
    const mediaWidth = this.props.dialog.currentProject.dimensions.width;
    if (!(this.props.dialog.currentProject.name === "connect four")) {
      return (
        <img className="projectIMG animated fadeIn"
          src={this.props.dialog.currentProject.pathName}
          alt="" height={mediaHeight}
          width={mediaWidth}/>
      )
    } else {
      return (
        <img className="projectIMG animated fadeIn connectFourGif"
          src={this.props.dialog.currentProject.pathName}
          alt="" height={mediaHeight}
          width={mediaWidth}
          onClick={this.handleConnectFourClick}/>
      )
    }
  }

  render() {
    const layoutAdjust = () => {
      if (this.props.dialog.currentProject.name === "community mobile app") {
        return (
          <div id="dialogDivMob">
            <img id="communityMobImage"
              className="animated fadeIn"
              src={this.props.dialog.currentProject.pathName}
              alt=""></img>
            <div id="communityMobTxt">
              <p id="communityMobDesc" className="animated fadeIn"> {this.props.dialog.currentProject.description} </p>
              <img id="communityMobImage2" className="animated fadeIn" src={CommMob} alt=""></img>
            </div>
          </div>
        )
      } else {
        return (
          <div id="dialogDiv">
            <p className="projectDesc animated fadeIn" > {this.props.dialog.currentProject.description} </p>
            {this.connectFourCheck()}
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
              <div id="projectDialogIconContainer" className="animated rollIn">
                <FontAwesome
                  className='dialogIcon'
                  data-tip data-for="githubCode"
                  style={this.state.isHovering ? {color: this.state.hovered} : {color: this.state.normal}}
                  name='github'
                  size='2x'
                  onMouseEnter={this.onMouseEnter}
                  onMouseLeave={this.onMouseLeave}
                  onClick={this.handleOnClick}
                />
              </div>
              {this.renderCheck()}
            </div>
          }>
          {layoutAdjust()}
        </Dialog>
      );
    } else { return null }
  }
}


const styles = {
  buttonLabel: {
    textTransform: 'lowercase',
    fontFamily: "HelveticaNeue",
    fontWeight: 'bold',
    fontSize: '20px',
    color: 'white',
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
  },
}

export default ProjectDialog;
