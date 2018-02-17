import React, { Component } from 'react';
import { Dialog, RaisedButton } from 'material-ui';
import selfImage from '../media/selfImage.jpg';
import resume from '../media/resume.pdf';
// import MyButton from './buttonCustom.js';
// import { RaisedButton } from 'material-ui';

class AboutDialog extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleOnGithub = this.handleOnGithub.bind(this);
    this.handleOnLinkedin = this.handleOnLinkedin.bind(this);
    this.handleOnResume = this.handleOnResume.bind(this);
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

  render() {
    if (this.props.dialog.showAboutDialog) {
      return (
        <Dialog
          title="about me"
          onRequestClose={this.handleClose}
          open={this.props.dialog.showAboutDialog}
          titleStyle={styles.title}
        >
          <div id="aboutDialogDiv">
            <img id='aboutIMG' src={selfImage} alt="" height="400" width="300" >
            </img>
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
    fontFamily: 'Alcubierre',
    textAlign: 'center',
    borderBottom: '5px solid #222',
  },
}

export default AboutDialog;
