import React from "react";
import { Link } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
import "../sass/sections.sass";

import { Row, Col } from "reactstrap";

const About = () => {
  return (
    <div className="cleanse">
      <div className="bg-texture-about ">
        <div className="about white d d-md-block">
          <Row>
            <Col sm md="6">
              <div className="aboutHeader">About</div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Blanditiis, quas sunt iusto velit, enim veritatis numquam
                fugiat, atque delectus architecto amet sit officiis saepe
                reprehenderit distinctio optio. Et repellat voluptatem maxime!
                Consequatur repudiandae quas, a illo eius nemo eligendi
                explicabo?
              </p>
              <p className="d-none d-md-block">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                sint voluptatum, inventore possimus ad at similique tempore unde
                asperiores laborum, cum architecto quae eum rerum?
              </p>
            </Col>
            <Col sm md="6">
              <div className="aboutHeader">Explore</div>
              <div className="pageLinks">
                <Link to="/">
                  <i className="fa fa-home"></i> Home
                </Link>
                <Link to="/about">
                  <i className="fa fa-asterisk"></i> About
                </Link>
                <Link to="/blog">
                  <i className="fa fa-box-open"></i> All Articles
                </Link>
                <Link to="/categories">
                  <i className="fa fa-book"></i> Explore categories
                </Link>
              </div>
            </Col>
          </Row>
          <span className="pt-3">Created by KJSCE Codecell</span>
        </div>
      </div>
    </div>
  );
};

export default About;
