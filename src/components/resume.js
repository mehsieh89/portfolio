import React, { Component } from 'react';
import { RaisedButton } from 'material-ui';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    window.open('https://docs.google.com/document/d/1mgIRVlWnKR_TSXsI059vwkh-fhbnFT-tZhtA9-VeXAo/edit?usp=sharing');
  }

  render() {
    return (
      <RaisedButton onClick={this.handleOnClick.bind(this)} label="Resume" primary={true}/> 
    );
  }
}

export default Resume;
