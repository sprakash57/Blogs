import React, { Fragment } from "react";

const Jumbotron = () => {
  return (
    <Fragment>
      <section className="section-home">
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
