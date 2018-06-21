import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';


export default
class NextArrow extends Component {
  constructor(props) {
    super(props);
  }

  handleOnClick = () => {
    if (this.props.dialog.sliderIndex === 4) {
      this.props.changeSliderIndex(0);
    } else {
      let newIndex = this.props.dialog.sliderIndex + 1;
      this.props.changeSliderIndex(newIndex);
    }
    this.props.onClick();
  }

  render() {
    return (
      <FontAwesome
        className='arrowIcon R'
        // style={{color: 'black'}}
        // style={{color: hoverColor2}}
        name='caret-right'
        size='2x'
        // onMouseEnter={this.onMouseEnter2}
        // onMouseLeave={this.onMouseLeave2}
        onClick={this.handleOnClick}
      />
    );
  };
}
