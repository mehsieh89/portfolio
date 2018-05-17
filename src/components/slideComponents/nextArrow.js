import React, { Component } from 'react';
import TouchRipple from 'material-ui/internal/TouchRipple';
import RightArrow from 'react-icons/lib/fa/angle-right';

export default
class NextArrow extends Component {

  render() {
    return (
      <TouchRipple>
        <div>
          <RightArrow className="slick-next" onClick={this.props.onClick}/>
        </div>
      </TouchRipple>
    );
  };
}
