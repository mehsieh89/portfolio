import React, { Component } from 'react';
import TouchRipple from 'material-ui/internal/TouchRipple';
import LeftArrow from 'react-icons/lib/fa/angle-left';

export default
class PrevArrow extends Component {

  render() {
    return (
      <TouchRipple>
        <div>
          <LeftArrow className="slick-prev" onClick={this.props.onClick}/>
        </div>
      </TouchRipple>
    );
  };
}
