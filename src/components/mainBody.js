import React, { Component } from 'react';
import Slider from 'react-slick';
import CommMobSlide from './slideComponents/commMobSlide.js';
import CommWebSlide from './slideComponents/commWebSlide.js';
import FridgrSlide from './slideComponents/fridgrSlide.js';
import MoodifySlide from './slideComponents/moodifySlide.js';
// import NextArrow from 'react-icons/lib/fa/angle-right';
// import PrevArrow from 'react-icons/lib/fa/angle-left';
import NextArrow from './slideComponents/nextArrow.js';
import PrevArrow from './slideComponents/prevArrow.js';

class Main extends Component {
  constructor(props) {
    super(props);
    // this.handleOnClick = this.handleOnClick.bind(this);
  }

  render() {
    const ArrowLeft = <PrevArrow/>;
    const ArrowRight = <NextArrow/>;

    const settings = {
        infinite: true,
        dots: true,
        // autoplay: true,
        // autoplaySpeed: 4500
    };
    return (
      <div id="sliderContainer">
        <Slider
          {...settings}
          prevArrow={ArrowLeft}
          nextArrow={ArrowRight}
        >
          <div>
            <CommWebSlide
              dialog={this.props.dialog}
              toggleProjectDialog={this.props.toggleProjectDialog}
              importProjectDialog={this.props.importProjectDialog}
            />
          </div>
          <div>
            <CommMobSlide
              dialog={this.props.dialog}
              toggleProjectDialog={this.props.toggleProjectDialog}
              importProjectDialog={this.props.importProjectDialog}
            />
          </div>
          <div>
            <FridgrSlide
              dialog={this.props.dialog}
              toggleProjectDialog={this.props.toggleProjectDialog}
              importProjectDialog={this.props.importProjectDialog}
            />
          </div>
          <div>
            <MoodifySlide
              dialog={this.props.dialog}
              toggleProjectDialog={this.props.toggleProjectDialog}
              importProjectDialog={this.props.importProjectDialog}
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Main;
