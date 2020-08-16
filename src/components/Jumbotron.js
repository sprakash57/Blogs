import React, { Fragment } from "react";
import Particles from "react-particles-js";

const Jumbotron = () => {
  return (
    <Fragment>
      <section className="section-home">
        <Particles
          style={{ height: "100vh" }}
          params={{
            particles: {
              number: {
                value: 160,
                density: {
                  enable: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  speed: 4,
                  size_min: 0.3,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                random: true,
                speed: 1,
                direction: "top",
                out_mode: "out",
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble",
                },
              },
              modes: {
                bubble: {
                  distance: 250,
                  duration: 2,
                  size: 0,
                  opacity: 0,
                },
                repulse: {
                  distance: 400,
                  duration: 4,
                },
              },
            },
          }}
        />
        <div className="box">
          <div className="d-none d-md-block">
            <h1 style={{ lineHeight: 0.9 }} className="white">
              <span
                style={{ fontSize: "1.2em", textShadow: "3px 2px #777" }}
                className="d-block m-0"
              >
                KJSCE
              </span>
              <span style={{ fontSize: "3em", textShadow: "4px 3px #777" }}>
                Codecell
              </span>
            </h1>
            <h3
              align="center"
              className="white"
              style={{ textShadow: "1px 2px #777", marginTop: "1em" }}
            >
              Changing the world, one bit at a time
            </h3>
          </div>
          <div className="d-block d-md-none">
            <div className="row row-header align-items-center">
              <div
                className="col-12 white"
                style={{ textShadow: "3px 2px #777" }}
              >
                <h1
                  align="center"
                  style={{ textShadow: "3px 3px #777", fontSize: "2.8rem" }}
                >
                  KJSCE Codecell
                </h1>
                <h4 align="center" className="pt-2">
                  Changing the World
                </h4>
                <h4 align="center"> One bit at a time.</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Jumbotron;
