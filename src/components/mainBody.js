import React, { Component } from 'react';
import Slider from 'react-slick';
import CommMobSlide from './slideComponents/commMobSlide.js';
import CommWebSlide from './slideComponents/commWebSlide.js';
import FridgrSlide from './slideComponents/fridgrSlide.js';
import MoodifySlide from './slideComponents/moodifySlide.js';
import NextArrow from './slideComponents/nextArrow.js';
import PrevArrow from './slideComponents/prevArrow.js';

class Main extends Component {
  componentDidUpdate() {
    console.log(this.props.dialog.sliderIndex);
    this.slider.slickGoTo(this.props.dialog.sliderIndex);
  }

  render() {
    const ArrowLeft = <PrevArrow/>;
    const ArrowRight = <NextArrow/>;

    const settings = {
        infinite: true,
        dots: true,
        // autoplay: true,
        // autoplaySpeed: 5000,
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
