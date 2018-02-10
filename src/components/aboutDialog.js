import React, { Component } from 'react';
import { Dialog } from 'material-ui';
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
    if (this.props.aboutDialog.showAboutDialog) {
      return (
        <Dialog
          title="About Me"
          onRequestClose={this.handleClose}
          open={this.props.aboutDialog.showAboutDialog === true}/>
      );
    } else {return null }
  }
}

export default AboutDialog;
