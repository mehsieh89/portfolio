import React, { Component } from 'react';
import FridgrMobileImg from '../media/fridgrMob.png'

class FridgrMobile extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.props.importProjectDialog({
      name: 'fridgr mobile app',
      pathName: FridgrMobileImg,
      githubURL: 'https://github.com/ninjacodez/fridgr',
      dimensions: {
        height: '325',
        width: '500',
      },
      description: "What if I told you there is an app on the market that manages fridge inventories with interactive lists"
    })
    this.props.toggleProjectDialog();
  }

  render() {
    return (
      <div className="project" onClick={this.handleOnClick.bind(this)}> fridgr mobile </div>
    );
  }
}

export default FridgrMobile;
