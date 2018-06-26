import React, { Component } from 'react';
import Slider from 'react-slick';
import ComMobSingleMU from '../media/ComMobSingleMU.jpg';
import CommWebMU from '../media/CommWebMU.jpeg';
import connectFourMUlarge from '../media/connectFourMU.jpg';
import fridgrMUlarge from '../media/fridgrMU.jpg';
import moodifyMUlarge from '../media/moodifyMU.jpg';
import CommMobSlide from './slideComponents/commMobSlide.js';
import CommWebSlide from './slideComponents/commWebSlide.js';
import ConnectFourSlide from './slideComponents/connectFourSlide.js';
import FridgrSlide from './slideComponents/fridgrSlide.js';
import MoodifySlide from './slideComponents/moodifySlide.js';
import NextArrow from './slideComponents/nextArrow.js';
import PrevArrow from './slideComponents/prevArrow.js';

const imageThumbs = [CommWebMU, ComMobSingleMU, fridgrMUlarge, moodifyMUlarge, connectFourMUlarge];

class Main extends Component {

  componentDidUpdate() {
    this.slider.slickGoTo(this.props.dialog.sliderIndex);
  }

  handleOnChange = (something, newIndex) => {
    for (var i = 0; i < this.props.dialog.isHovering.length; i++) {
      if (newIndex === i) {
        this.props.toggleHovering(i, true);
      } else {
        this.props.toggleHovering(i, false);
      }
    }
  }

  handleOnLoad = () => {
    console.log('yay');
  }

  render() {
    const ArrowLeft =
      <PrevArrow
        className="slick-prev"
        dialog={this.props.dialog}
        changeSliderIndex={this.props.changeSliderIndex}
      />;
    const ArrowRight =
      <NextArrow
        className="slick-next"
        dialog={this.props.dialog}
        changeSliderIndex={this.props.changeSliderIndex}
      />;

    const settings = {
        customPaging: (i) => {
           return (
              <a>
                <img src={imageThumbs[i]}
                 alt=""
                 onClick={() => this.props.changeSliderIndex(i)}
                />
              </a>
            );
          },
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: true,
        adaptiveHeight: true,
        dots: true,
        dotsClass: "slick-dots slick-thumb"
    };
    return (
      <div id="sliderContainer"
        className="animated fadeIn sliderContainerAnimation"
        onLoad={this.handleOnLoad}>
        <Slider
          {...settings}
          ref={slider => (this.slider = slider)}
          prevArrow={ArrowLeft}
          nextArrow={ArrowRight}
          beforeChange={this.handleOnChange}
        >
          <div id="sliderImgContainer">
            <CommWebSlide
              dialog={this.props.dialog}
              changeSliderIndex={this.props.changeSliderIndex}
              toggleProjectDialog={this.props.toggleProjectDialog}
              importProjectDialog={this.props.importProjectDialog}
            />
          </div>
          <div id="sliderImgContainer">
            <CommMobSlide
              dialog={this.props.dialog}
              changeSliderIndex={this.props.changeSliderIndex}
              toggleProjectDialog={this.props.toggleProjectDialog}
              importProjectDialog={this.props.importProjectDialog}
            />
          </div>
          <div id="sliderImgContainer">
            <FridgrSlide
              dialog={this.props.dialog}
              changeSliderIndex={this.props.changeSliderIndex}
              toggleProjectDialog={this.props.toggleProjectDialog}
              importProjectDialog={this.props.importProjectDialog}
            />
          </div>
          <div id="sliderImgContainer">
            <MoodifySlide
              dialog={this.props.dialog}
              changeSliderIndex={this.props.changeSliderIndex}
              toggleProjectDialog={this.props.toggleProjectDialog}
              importProjectDialog={this.props.importProjectDialog}
            />
          </div>
          <div id="sliderImgContainer">
            <ConnectFourSlide
              dialog={this.props.dialog}
              changeSliderIndex={this.props.changeSliderIndex}
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
