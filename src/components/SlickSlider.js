import React, { Fragment } from "react";
import Slider from "react-slick";
import { Card } from "reactstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";

import "../sass/cards.sass";

import { CardImg } from "reactstrap";

function SampleNextArrow() {
  return <div style={{ display: "none" }} />;
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: "linear",
  swipeToSlide: true,
  pauseOnHover: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SampleNextArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const SlickSlider = () => {
  return (
    <Fragment>
      <div className="categoryHeader">Categories</div>
      <div className="underline"></div>
      <div className="slider-category">
        <div className="slider-equalizer">
          <Slider {...settings}>
            <div className="category">
              <Link to="/">
                <div className="overlay">ML</div>
              </Link>
              <CardImg
                width="100%"
                src="https://images.unsplash.com/photo-1515704089429-fd06e6668458?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="Card image cap"
                className="categoryImg"
              ></CardImg>
            </div>
            <div className="category">
              <Link to="/">
                <div className="overlay">IOT</div>
              </Link>
              <CardImg
                width="100%"
                src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="Card image cap"
                className="categoryImg"
              ></CardImg>
            </div>
            <div className="category">
              <Link to="/">
                <div className="overlay">AR/VR</div>
              </Link>
              <CardImg
                width="100%"
                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="Card image cap"
                className="categoryImg"
              ></CardImg>
            </div>
            <div className="category">
              <Link to="/">
                <div className="overlay">WEBDEV</div>
              </Link>
              <CardImg
                width="100%"
                src="https://images.unsplash.com/photo-1531030874896-fdef6826f2f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="Card image cap"
                className="categoryImg"
              ></CardImg>
            </div>
            <div className="category">
              <Link to="/">
                <div className="overlay">HACKING</div>
              </Link>
              <CardImg
                width="100%"
                src="https://images.unsplash.com/photo-1524860769472-246b6afea403?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="Card image cap"
                className="categoryImg"
              ></CardImg>
            </div>
          </Slider>
        </div>
      </div>
    </Fragment>
  );
};

export default SlickSlider;
