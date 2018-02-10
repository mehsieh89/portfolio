import React, { Component } from 'react';
// import { RaisedButton } from 'material-ui';

class CommunityWeb extends Component {
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
      <b className="project" onClick={this.handleOnClick}> Community Web </b>
    );
  }
}

export default CommunityWeb;
