import React, { Component } from 'react';
// import { RaisedButton } from 'material-ui';

class CommunityMobile extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    //send the name, img src, github URL
    this.props.toggleProjectDialog();
  }

  render() {
    return (
      <b className="project" onClick={this.handleOnClick.bind(this)}> Community Mobile </b>
    );
  }
}

export default CommunityMobile;
