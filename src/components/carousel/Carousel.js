import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import slider1 from "../../resources/img/slider1.jpg";
import slider2 from "../../resources/img/slider2.jpg";
import slider3 from "../../resources/img/slider3.jpg";
import slider4 from "../../resources/img/slider4.png";
import slider5 from "../../resources/img/slider5.jpg";

export default class CarouselComp extends Component {
  render() {
    return (
      <div>
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
          <div>
            <img className="carsol-style" src={slider1} />
          </div>
          <div>
            <img className="carsol-style" src={slider2} />
          </div>
          <div>
            <img className="carsol-style" src={slider3} />
          </div>
          <div>
            <img className="carsol-style" src={slider4} />
          </div>
          <div>
            <img className="carsol-style" src={slider5} />
          </div>
        </Carousel>
      </div>
    );
  }
}
