import React, { Component } from 'react';
import RightArrow from 'react-icons/lib/fa/angle-right';

export default
class NextArrow extends Component {

    render() {
        return (
            <div>
                <RightArrow className="slick-next" onClick={this.props.onClick}/>
            </div>
        );
    };
}
