import React, { Component } from 'react';
import Slider from 'react-slick';
import CommMobSlide from './slideComponents/commMobSlide.js';
import CommWebSlide from './slideComponents/commWebSlide.js';
import FridgrSlide from './slideComponents/fridgrSlide.js';
import MoodifySlide from './slideComponents/moodifySlide.js';
import LeftArrow from 'react-icons/lib/fa/angle-left';
import RightArrow from 'react-icons/lib/fa/angle-right';

class Main extends Component {
  render() {
    return (
      <div id="container">
        <Slider
          dots={true}
          nextArrow={<RightArrow/>}
          prevArrow={
            <LeftArrow
              id="sliderArrows"
              color='black'>
            </LeftArrow>}
          // infinite={true}
          // speed={500}
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
