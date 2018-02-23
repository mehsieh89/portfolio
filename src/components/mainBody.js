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
  render() {
    const ArrowLeft = <PrevArrow/>;
    const ArrowRight = <NextArrow/>;

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500
    };
    return (
      <div id="container">
        <Slider
          {...settings}
          prevArrow={ArrowLeft}
          nextArrow={ArrowRight}
          // nextArrow={
          //   <NextArrow
          //     id="sliderArrows"
          //     color='#A9B7C0'>
          //   </NextArrow>
          // }
          // prevArrow={
          //   <PrevArrow
          //     id="sliderArrows"
          //     color='#A9B7C0'>
          //   </PrevArrow>
          // }
        >
          <div>
            <CommMobSlide/>
          </div>
          <div>
            <CommWebSlide/>
          </div>
          <div>
            <FridgrSlide/>
          </div>
          <div>
            <MoodifySlide/>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Main;
