import React, { Component } from 'react';
// import { RaisedButton } from 'material-ui';

class CommWebSlide extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    // this.props.toggleAboutDialog();
  }

  render() {
    return (
      <div>
        <img src='../media/communityWeb.png'></img>
      </div>
    );
  }
}

export default CommWebSlide;
