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
      description: "Fridgr is a mobile application built for homes with co-habitants. The application manages inventories with interactive lists and includes a barcode scanning input system."
    })
    this.props.toggleProjectDialog();
  }

  render() {
    return (
      <div className="project" onClick={this.handleOnClick}> fridgr mobile </div>
    );
  }
}

export default FridgrMobile;
