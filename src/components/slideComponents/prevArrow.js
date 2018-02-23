import React, { Component } from 'react';
import LeftArrow from 'react-icons/lib/fa/angle-left';

export default
class PrevArrow extends React.Component {

    render() {
        return (
            <div>
                <LeftArrow className="slick-prev" onClick={this.props.onClick}/>
            </div>
        );
    };
}
