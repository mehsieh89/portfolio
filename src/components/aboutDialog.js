import React, { Component } from 'react';
import { Dialog } from 'material-ui';
import selfImage from '../media/selfImage.jpg';
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
            <img src={selfImage} alt="" height="300" width="225" >
            </img>
            <div id="aboutDesc">
              I am a software engineer looking for opportunities to learn and grow.
              I enjoy working in teams and am looking to improve my skills from both mentors and peers.
              I like companies and projects that benefit people; technology that makes life easier and better.
            </div>
            <b> e-mail: mehsieh89@gmail.com </b>
            <div id="github" onClick={this.handleOnClick}> Github </div>
          </div>
        </Dialog>
      );
    } else {return null }
  }
}

const styles = {
  title: {
    fontSize: '26px',
    fontFamily: 'Alcubierre',
    textAlign: 'center',
    borderBottom: '5px solid #222',
  },
}

export default AboutDialog;
