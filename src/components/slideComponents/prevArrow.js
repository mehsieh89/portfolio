import React, { Component } from 'react';
import Ionicon from 'react-ionicons';

export default
class PrevArrow extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    if (this.props.dialog.sliderIndex === 0) {
      this.props.changeSliderIndex(3);
    } else {
      let newIndex = this.props.dialog.sliderIndex - 1;
      this.props.changeSliderIndex(newIndex);
    }
    this.props.onClick();
  }

  render() {
    return (
      <Ionicon icon="md-arrow-dropleft"
        fontSize="100px"
        color="white"
        className="slick-prev"
        onClick={this.handleOnClick}
      />
    );
  };
}
