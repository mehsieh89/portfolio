import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

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
      <FontAwesome
        className='arrowIcon L'
        style={{color: 'black'}}
        name='caret-left'
        size='2x'
        onClick={this.handleOnClick}
      />
      // {/* <Ionicon icon="md-arrow-dropleft"
      //   fontSize="100px"
      //   color="white"
      //   className="slick-prev"
      //   onClick={this.handleOnClick}
      // /> */}
    );
  };
}
