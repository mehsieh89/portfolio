import React, { Component } from 'react';
import Slider from 'react-slick';
import {commMob, commWeb, fridgr, moodify, connectFour} from './projectData.js';
import CommMobSlide from './slideComponents/commMobSlide.js';
import CommWebSlide from './slideComponents/commWebSlide.js';
import ConnectFourSlide from './slideComponents/connectFourSlide.js';
import FridgrSlide from './slideComponents/fridgrSlide.js';
import MoodifySlide from './slideComponents/moodifySlide.js';
import NextArrow from './slideComponents/nextArrow.js';
import PrevArrow from './slideComponents/prevArrow.js';
import Thumbnail from './thumbnail.js';

const imageThumbs = [commWeb, commMob, fridgr, moodify, connectFour];

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
            <Thumbnail
              image={imageThumbs[i].mockUp}
              projectName={imageThumbs[i].name}
              index={i}
              changeSliderIndex={this.props.changeSliderIndex}
            />
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
        className="animated fadeIn sliderContainerAnimation">
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
