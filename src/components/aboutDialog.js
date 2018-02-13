import React, { Component } from 'react';
import { Dialog } from 'material-ui';
import selfImage from '../media/selfImage.jpg';
// import { RaisedButton } from 'material-ui';

class AboutDialog extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.toggleAboutDialog();
  }

  render() {
    if (this.props.dialog.showAboutDialog) {
      return (
        <Dialog
          title="About Me"
          onRequestClose={this.handleClose}
          open={this.props.dialog.showAboutDialog}
        >
          <div>
            I am a software engineer looking for opportunities to learn and grow.
            I enjoy working in teams and am looking to improve my skills from both mentors and peers.
            I like companies and projects that benefit people; technology that makes life easier and better.
          </div>
          <img src={selfImage} alt="" height="300" width="225" >
          </img>
          <b> e-mail: mehsieh89@gmail.com </b>
        </Dialog>
      );
    } else {return null }
  }
}

export default AboutDialog;
