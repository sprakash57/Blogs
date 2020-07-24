import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "../sass/sections.sass";

import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Row,
  Col,
} from "reactstrap";

const RecentPosts = () => {
  return (
    <div className="d-none d-md-block cover">
      <div className="bg-texture"></div>
      <div className="headerPost">Recent Posts</div>
      <div className="underline2"></div>
      <Row>
        <Col md lg="6" className="p-0">
          <Card className="recentPostCard">
            <Row>
              <Col sm md="5" className="p-0">
                <CardImg
                  width="100%"
                  src="https://images.unsplash.com/photo-1428223501723-d821c5d00ca3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt="Card image cap"
                  className="topPostImg"
                />
              </Col>
              <Col sm md="7" className="topPostText">
                <CardBody>
                  <CardTitle>Card Title</CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quas amet, facere quibusdam illo sit itaque.
                  </CardText>
                  <CardText>
                    <blockquote className="text-success">- John Doe</blockquote>
                  </CardText>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md lg="6" className="p-0">
          <Card className="recentPostCard">
            <Row>
              <Col sm md="5" className="p-0">
                <CardImg
                  width="100%"
                  src="https://images.unsplash.com/photo-1428223501723-d821c5d00ca3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt="Card image cap"
                  className=" topPostImg"
                />
              </Col>
              <Col sm md="7" className="topPostText">
                <CardBody>
                  <CardTitle>Card Title</CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quas amet, facere quibusdam illo sit itaque.
                  </CardText>
                  <CardText>
                    <blockquote className="text-success">- John Doe</blockquote>
                  </CardText>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md lg="6" className="p-0">
          <Card className="recentPostCard">
            <Row>
              <Col sm md="5" className="p-0">
                <CardImg
                  width="100%"
                  src="https://images.unsplash.com/photo-1428223501723-d821c5d00ca3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt="Card image cap"
                  className=" topPostImg"
                />
              </Col>
              <Col sm md="7" className="topPostText">
                <CardBody>
                  <CardTitle>Card Title</CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quas amet, facere quibusdam illo sit itaque.
                  </CardText>
                  <CardText>
                    <blockquote className="text-success">- John Doe</blockquote>
                  </CardText>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md lg="6" className="p-0">
          <Card className="recentPostCard">
            <Row>
              <Col sm md="5" className="p-0">
                <CardImg
                  width="100%"
                  src="https://images.unsplash.com/photo-1428223501723-d821c5d00ca3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt="Card image cap"
                  className=" topPostImg"
                />
              </Col>
              <Col sm md="7" className="topPostText">
                <CardBody>
                  <CardTitle>Card Title</CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quas amet, facere quibusdam illo sit itaque.
                  </CardText>
                  <CardText>
                    <blockquote className="text-success">- John Doe</blockquote>
                  </CardText>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md lg="6" className="p-0">
          <Card className="recentPostCard">
            <Row>
              <Col sm md="5" className="p-0">
                <CardImg
                  width="100%"
                  src="https://images.unsplash.com/photo-1428223501723-d821c5d00ca3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt="Card image cap"
                  className=" topPostImg"
                />
              </Col>
              <Col sm md="7" className="topPostText">
                <CardBody>
                  <CardTitle>Card Title</CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quas amet, facere quibusdam illo sit itaque.
                  </CardText>
                  <CardText>
                    <blockquote className="text-success">- John Doe</blockquote>
                  </CardText>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md lg="6" className="p-0">
          <Card className="recentPostCard">
            <Row>
              <Col sm md="5" className="p-0">
                <CardImg
                  width="100%"
                  src="https://images.unsplash.com/photo-1428223501723-d821c5d00ca3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt="Card image cap"
                  className=" topPostImg"
                />
              </Col>
              <Col sm md="7" className="topPostText">
                <CardBody>
                  <CardTitle>Card Title</CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quas amet, facere quibusdam illo sit itaque.
                  </CardText>
                  <CardText>
                    <blockquote className="text-success">- John Doe</blockquote>
                  </CardText>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <hr />
    </div>
  );
};

export default RecentPosts;
