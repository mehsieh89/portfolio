import React, { Component } from 'react';
import Slider from 'react-slick';
import CommMobSlide from './slideComponents/commMobSlide.js';
import CommWebSlide from './slideComponents/commWebSlide.js';
import FridgrSlide from './slideComponents/fridgrSlide.js';
import MoodifySlide from './slideComponents/moodifySlide.js';
import NextArrow from './slideComponents/nextArrow.js';
import PrevArrow from './slideComponents/prevArrow.js';

class Main extends Component {
  constructor(props) {
    super(props);
    // this.handleOnChange = this.handleOnChange.bind(this);
  }
  componentDidUpdate() {
    this.slider.slickGoTo(this.props.dialog.sliderIndex);
  }

  render() {
    const ArrowLeft = <PrevArrow
                        dialog={this.props.dialog}
                        decrementSliderIndex={this.props.decrementSliderIndex}
                       />;
    const ArrowRight = <NextArrow
                        dialog={this.props.dialog}
                        incrementSliderIndex={this.props.incrementSliderIndex}
                       />;

    const settings = {
        infinite: true,
        dots: true,
        accessibility: true,
        pauseOnHover: true,
        adaptiveHeight: true,
    };
    return (
      <div id="sliderContainer" className="animated zoomInUp">
        <Slider
          {...settings}
          ref={slider => (this.slider = slider)}
          prevArrow={ArrowLeft}
          nextArrow={ArrowRight}
          afterChange={this.handleOnChange}
        >
          <div id="sliderImgContainer">
            <CommWebSlide
              dialog={this.props.dialog}
              toggleProjectDialog={this.props.toggleProjectDialog}
              importProjectDialog={this.props.importProjectDialog}
            />
          </div>
          <div id="sliderImgContainer">
            <CommMobSlide
              dialog={this.props.dialog}
              toggleProjectDialog={this.props.toggleProjectDialog}
              importProjectDialog={this.props.importProjectDialog}
            />
          </div>
          <div id="sliderImgContainer">
            <FridgrSlide
              dialog={this.props.dialog}
              toggleProjectDialog={this.props.toggleProjectDialog}
              importProjectDialog={this.props.importProjectDialog}
            />
          </div>
          <div id="sliderImgContainer">
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
