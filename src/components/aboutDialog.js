import React, { Component } from 'react';
import { Dialog, RaisedButton } from 'material-ui';
import selfImage from '../media/selfImage.jpg';
import resume from '../media/resume.pdf';
import { SocialIcon } from 'react-social-icons';
import DocumentText from 'react-icons/lib/io/document-text';
import Github from 'react-icons/lib/go/mark-github';
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
    let hoverColor = "#222";
    let hoverColor2 = "#222";
    let hoverColor3 = "#222";

    if(this.state.isHovering) {
      hoverColor = '#BEBEBE';
    }

    if(this.state.isHovering2) {
      hoverColor2 = '#BEBEBE';
    }

    if(this.state.isHovering3) {
      hoverColor3 = '#BEBEBE';
    }

    if (this.props.dialog.showAboutDialog) {
      return (
        <Dialog
          title={
            <div id="dialogTitleContainer">
              <div id="aboutTitle"> about me </div>
              <div id="dialogIconContainer">
                <DocumentText
                  className="dialogIcon"
                  id="resumeIcon"
                  color={hoverColor3}
                  size={50}
                  onMouseEnter={this.onMouseEnter3}
                  onMouseLeave={this.onMouseLeave3}
                  onClick={this.handleOnResume}
                />
                <LinkedIn
                  className="dialogIcon"
                  size={50}
                  color={hoverColor}
                  onMouseEnter={this.onMouseEnter}
                  onMouseLeave={this.onMouseLeave}
                  onClick={this.handleOnLinkedin}
                />
                <Github
                  className="dialogIcon"
                  color={hoverColor2}
                  size={40}
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
            <img id='aboutIMG' src={selfImage} alt="" height="400" width="300"></img>
            <div id="aboutTextDiv">
              <div id="aboutDesc">
                Hello! I am a software engineer looking for opportunities to improve and grow.
                I enjoy working in teams and am looking to learn from both mentors and peers.
                I like companies and projects that benefit people, products that makes life easier and better.
                Have a look around and enjoy! Hope to hear from you!
                <br />
                <br />
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
    // backgroundColor: '#BEBEBE',
  },
  buttonLabel: {
    textTransform: 'lowercase',
    fontFamily: 'Alcubierre',
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
    color: '#222',
    fontFamily: 'Alcubierre',
    textAlign: 'left',
    borderBottom: '2px solid #222',
  },
}

export default AboutDialog;
