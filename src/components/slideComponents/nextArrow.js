import React, { Component } from 'react';
import Ionicon from 'react-ionicons';

export default
class NextArrow extends Component {

  render() {
    return (
      <Ionicon icon="md-arrow-dropright"
        fontSize="40px"
        color="white"
        className="slick-next"
        onClick={this.props.onClick}
      />
    );
  };
}
