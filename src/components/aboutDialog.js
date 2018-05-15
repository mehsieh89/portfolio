import React, { Component } from 'react';
import { Dialog } from 'material-ui';
import selfImage from '../media/selfImage.jpg';
import resume from '../media/resume.pdf';
import DocumentText from 'react-icons/lib/io/document-text';
import Github from 'react-icons/lib/fa/github';
import LinkedIn from 'react-icons/lib/io/social-linkedin';

class AboutDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
      isHovering2: false,
      isHovering3: false,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleOnGithub = this.handleOnGithub.bind(this);
    this.handleOnLinkedin = this.handleOnLinkedin.bind(this);
    this.handleOnResume = this.handleOnResume.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseEnter2 = this.onMouseEnter2.bind(this);
    this.onMouseLeave2 = this.onMouseLeave2.bind(this);
    this.onMouseEnter3 = this.onMouseEnter3.bind(this);
    this.onMouseLeave3 = this.onMouseLeave3.bind(this);
  }

  handleOnGithub() {
    window.open('https://github.com/mehsieh89');
  }

  handleOnLinkedin() {
    window.open('https://www.linkedin.com/in/melvin-hsieh-5620399b/');
  }

  handleOnResume() {
    window.open(resume);
  }

  handleClose() {
    this.props.toggleAboutDialog();
  }

  onMouseEnter() {
    this.setState({ isHovering: true });
  }

  onMouseLeave() {
    this.setState({ isHovering: false });
  }

  onMouseEnter2() {
    this.setState({ isHovering2: true });
  }

  onMouseLeave2() {
    this.setState({ isHovering2: false });
  }

  onMouseEnter3() {
    this.setState({ isHovering3: true });
  }

  onMouseLeave3() {
    this.setState({ isHovering3: false });
  }

  render() {
    let hoverColor = "white";
    let hoverColor2 = "white";
    let hoverColor3 = "white";

    if(this.state.isHovering) {
      hoverColor = '#A9B7C0';
    }

    if(this.state.isHovering2) {
      hoverColor2 = '#A9B7C0';
    }

    if(this.state.isHovering3) {
      hoverColor3 = '#A9B7C0';
    }

    if (this.props.dialog.showAboutDialog) {
      return (
        <Dialog
          title={
            <div id="dialogTitleContainer">
              <div id="aboutTitle" className="animated lightSpeedIn"> about me </div>
              <div id="dialogIconContainer">
                <DocumentText
                  className="dialogIcon animated rollIn"
                  id="resumeIcon"
                  color={hoverColor3}
                  size={50}
                  onMouseEnter={this.onMouseEnter3}
                  onMouseLeave={this.onMouseLeave3}
                  onClick={this.handleOnResume}
                />
                <LinkedIn
                  className="dialogIcon animated rollIn"
                  size={50}
                  color={hoverColor}
                  onMouseEnter={this.onMouseEnter}
                  onMouseLeave={this.onMouseLeave}
                  onClick={this.handleOnLinkedin}
                />
                <Github
                  className="dialogIcon animated rollIn"
                  color={hoverColor2}
                  size={50}
                  onMouseEnter={this.onMouseEnter2}
                  onMouseLeave={this.onMouseLeave2}
                  onClick={this.handleOnGithub}
                />
              </div>
            </div>
          }
          onRequestClose={this.handleClose}
          open={this.props.dialog.showAboutDialog}
          titleStyle={styles.title}
          bodyStyle={styles.body}
        >
          <div id="aboutDialogDiv">
            <img id='aboutIMG' className="animated fadeInDown" src={selfImage} alt="" height="400" width="300"></img>
            <div id="aboutTextDiv">
              <div id="aboutDesc" className="animated zoomIn">
                "Hello!
                Have a look around and enjoy. Hope to hear from you!" - Mel
                <br />
                <br />
              </div>
              <div className="e-mailBox animated fadeInUp">
                <a id="email" href="mailto:mehsieh89@gmail.com"> e-mail: mehsieh89@gmail.com </a>
              </div>
            </div>
          </div>
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
  },
  button1: {
    position: 'relative',
    right: '10px',
    marginTop: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100px',
    display: 'block',
  },
  button2: {
    marginTop: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100px',
    display: 'block',
  },
  button3: {
    position: 'relative',
    left: '10px',
    marginTop: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100px',
    display: 'block',
  },
  title: {
    fontSize: '30px',
    fontWeight: 'bold',
    color: 'white',
    fontFamily: "HelveticaNeue",
    textAlign: 'left',
    // borderBottom: '2px solid #CCCBC6',
    backgroundColor: '#A9B7C0',
  },
}

export default AboutDialog;
