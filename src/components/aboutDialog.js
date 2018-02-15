import React, { Component } from 'react';
import { Dialog, RaisedButton } from 'material-ui';
import selfImage from '../media/selfImage.jpg';
// import MyButton from './buttonCustom.js';
// import { RaisedButton } from 'material-ui';

class AboutDialog extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    window.open('https://github.com/mehsieh89');
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
              <RaisedButton
                // variant="raised"
                backgroundColor="#222"
                labelStyle={styles.buttonLabel}
                style={styles.repoButton}
                label='github'
                onClick={this.handleOnClick} />
              {/* <div id="github" onClick={this.handleOnClick}> Github </div> */}
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
  repoButton: {
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
