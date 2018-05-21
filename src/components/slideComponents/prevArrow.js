import React, { Component } from 'react';
import Ionicon from 'react-ionicons';

export default
class PrevArrow extends Component {

  render() {
    return (
      <Ionicon icon="md-arrow-dropleft"
        fontSize="100px"
        color="white"
        className="slick-prev"
        onClick={this.props.onClick}
      />
    );
  };
}
