import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';

class Thumbnail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hovered: false
    }
  }

  onMouseEnter = () => {
    this.setState({hovered: true});
  }

  onMouseLeave = () => {
    this.setState({hovered: false});
  }

  renderCheck = () => {
    if (this.state.hovered) {
      return (<ReactTooltip
                delayShow={200}
                className='thumbnail animated fadeIn'
                id={this.props.projectName}
                effect='solid'
              >
                <span> {this.props.projectName} </span>
              </ReactTooltip>)
    } else {
      return null;
    }
  }

  handleClick = () => {
    this.props.changeSliderIndex(this.props.index);
  }

  render() {
    return (
      <span>
        <a
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          <img
            data-tip data-for={this.props.projectName}
            src={this.props.image}
            alt=""
            onClick={this.handleClick}
          />
        </a>
        {this.renderCheck()}
      </span>
    );
  }
}

export default Thumbnail;
