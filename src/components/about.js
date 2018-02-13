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
        <b className="project" onClick={this.handleOnClick}> About </b>
    );
  }
}

export default About;
