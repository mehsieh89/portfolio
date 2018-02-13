import React, { Component } from 'react';
import FridgrMobileImg from '../media/fridgrMob.png'

class FridgrMobile extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.props.importProjectDialog({
      name: 'Fridgr Mobile App',
      pathName: FridgrMobileImg,
      githubURL: 'https://github.com/ninjacodez/fridgr',
    })
    this.props.toggleProjectDialog();
  }

  render() {
    return (
      <b className="project" onClick={this.handleOnClick.bind(this)}> Fridgr Mobile </b>
    );
  }
}

export default FridgrMobile;
