import React, { Component } from 'react';
import { Dialog, RaisedButton } from 'material-ui';
import selfImage from '../media/selfImage.jpg';
import resume from '../media/resume.pdf';
import { SocialIcon } from 'react-social-icons';

class AboutDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
      isHovering2: false,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleOnGithub = this.handleOnGithub.bind(this);
    this.handleOnLinkedin = this.handleOnLinkedin.bind(this);
    this.handleOnResume = this.handleOnResume.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseEnter2 = this.onMouseEnter2.bind(this);
    this.onMouseLeave2 = this.onMouseLeave2.bind(this);
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

  render() {
    let hoverColor = "#222"
    let hoverColor2 = "#222"

    if(this.state.isHovering) {
      hoverColor = '#BEBEBE';
    }

    if(this.state.isHovering2) {
      hoverColor2 = '#BEBEBE';
    }

    if (this.props.dialog.showAboutDialog) {
      return (
        <Dialog
          title={
            <div id="dialogTitleContainer">
              <div id="aboutTitle"> about me </div>
              <div id="dialogIconContainer">
                <SocialIcon
                  className="dialogIcon"
                  network="linkedin"
                  color={hoverColor}
                  onMouseEnter={this.onMouseEnter}
                  onMouseLeave={this.onMouseLeave}
                />
                <SocialIcon
                  className="dialogIcon"
                  network="github"
                  color={hoverColor2}
                  onMouseEnter={this.onMouseEnter2}
                  onMouseLeave={this.onMouseLeave2}
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
                I like companies and projects that benefit people; products that makes life easier and better.
                Have a look around and enjoy! Hope to hear from you!
                <br />
                <br />
                <a id="email" href="mailto:mehsieh89@gmail.com"> e-mail: mehsieh89@gmail.com </a>
              </div>
              <div id="aboutButtonContainer">
                <RaisedButton
                  backgroundColor="#222"
                  labelStyle={styles.buttonLabel}
                  style={styles.button1}
                  label='github'
                  onClick={this.handleOnGithub} />
                <RaisedButton
                  backgroundColor="#222"
                  labelStyle={styles.buttonLabel}
                  style={styles.button2}
                  label='linkedin'
                  onClick={this.handleOnLinkedin} />
                <RaisedButton
                  backgroundColor="#222"
                  labelStyle={styles.buttonLabel}
                  style={styles.button3}
                  label='resume'
                  onClick={this.handleOnResume} />
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
    backgroundColor: '#BEBEBE',
  },
  buttonLabel: {
    textTransform: 'lowercase',
    fontFamily: 'Alcubierre',
    fontWeight: 'bold',
    fontSize: '20px',
    color: 'white',
    '&:hover': {
      backgroundColor: 'white',
    }
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
