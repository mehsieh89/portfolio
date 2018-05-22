import React, { Component } from 'react';
import { Dialog, RaisedButton } from 'material-ui';
import CommMob from '../media/communityMob.jpg';
import Github from 'react-icons/lib/fa/github';
import FontAwesome from 'react-fontawesome';

class ProjectDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering2: false
    }
    this.handleClose = this.handleClose.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.onMouseEnter2 = this.onMouseEnter2.bind(this);
    this.onMouseLeave2 = this.onMouseLeave2.bind(this);
  }

  handleOnClick() {
    window.open(this.props.dialog.currentProject.githubURL);
  }

  handleClose() {
    this.props.toggleProjectDialog();
  }

  onMouseEnter2() {
    this.setState({ isHovering2: true });
  }

  onMouseLeave2() {
    this.setState({ isHovering2: false });
  }

  render() {
    const mediaHeight = this.props.dialog.currentProject.dimensions.height;
    const mediaWidth = this.props.dialog.currentProject.dimensions.width;
    let hoverColor2 = "white";
    if(this.state.isHovering2) {
      hoverColor2 = '#A9B7C0';
    }

    const layoutAdjust = () => {
      if (this.props.dialog.currentProject.name === "community mobile app") {
        return (
          <div id="dialogDivMob">
            <img id="communityMobImage" className="animated fadeIn" src={this.props.dialog.currentProject.pathName} alt=""></img>
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
            <img className="projectIMG animated fadeIn" src={this.props.dialog.currentProject.pathName} alt="" height={mediaHeight} width={mediaWidth}>
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
              {/* <Github
                className="dialogIcon animated rollIn"
                color={hoverColor2}
                size={50}
                onMouseEnter={this.onMouseEnter2}
                onMouseLeave={this.onMouseLeave2}
                onClick={this.handleOnClick}
              /> */}
              <FontAwesome
                className='dialogIcon animated rollIn'
                style={{color: hoverColor2}}
                name='github'
                size='2x'
                onMouseEnter={this.onMouseEnter2}
                onMouseLeave={this.onMouseLeave2}
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
  },
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
