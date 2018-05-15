import React, { Component } from 'react';
// import { RaisedButton } from 'material-ui';

class About extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.props.toggleAboutDialog();
  }

  render() {
    return (
      <div className="selfButton animated zoomInUp" onClick={this.handleOnClick}> about </div>
    );
  }
}

export default About;
