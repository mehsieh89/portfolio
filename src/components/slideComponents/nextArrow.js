import React, { Component } from 'react';
import RightArrow from 'react-icons/lib/fa/angle-right';

export default
class NextArrow extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event) {
    this.props.onClick();
    this.props.incrementSliderIndex();
  }

  render() {
      return (
          <div>
              <RightArrow className="slick-next" onClick={this.handleOnClick}/>
          </div>
      );
  };
}
