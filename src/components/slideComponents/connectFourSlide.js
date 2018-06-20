import React, { Component } from 'react';
import ConnectFour from '../../media/connectFourMUlarge.png';
import ConnectFourGif from '../../media/connectFourGif.gif';

class ConnectFourSlide extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick = () => {
    this.props.importProjectDialog({
      name: 'connect four',
      pathName: ConnectFourGif,
      githubURL: 'https://github.com/mehsieh89/connectFour/tree/master',
      dimensions: {
        height: '325px',
        width: '500px',
      },
      description: "Front-end only, Connect Four game. Takes in two player names and alternates their turns as players drop chips!"
    });
    this.props.toggleProjectDialog();
    this.props.changeSliderIndex(4);
  }

  render() {
    return (
      <div id="sliderImgFrame">
        <img className="sliderImg" src={ConnectFour} onClick={this.handleOnClick} alt=""></img>
      </div>
    );
  }
}

export default ConnectFourSlide;
