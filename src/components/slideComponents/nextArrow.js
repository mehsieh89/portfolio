import React, { Component } from 'react';
import Ionicon from 'react-ionicons';

export default
class NextArrow extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    if (this.props.dialog.sliderIndex === 3) {
      this.props.changeSliderIndex(0);
    } else {
      let newIndex = this.props.dialog.sliderIndex + 1;
      this.props.changeSliderIndex(newIndex);
    }
    this.props.onClick();
  }

  render() {
    return (
      <Ionicon icon="md-arrow-dropright"
        fontSize="40px"
        color="white"
        className="slick-next"
        onClick={this.handleOnClick}
      />
    );
  };
}
