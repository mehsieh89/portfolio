import React, { Component } from 'react';
import TouchRipple from 'material-ui/internal/TouchRipple';
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
