import React, { useEffect } from "react";
import Holder from "holderjs";
import "bootstrap/dist/css/bootstrap.min.css";

import "../sass/cards.sass";

import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Row,
  Col,
} from "reactstrap";

export default function Cards() {
  useEffect(() => {
    Holder.run({
      images: ".testimg",
    });
  }, []);

  return (
    <div>
      {/* Main Card 1 */}
      <Card>
        <Row>
          <Col sm md="7" className="p-0">
            <CardImg
              width="100%"
              src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="Card image cap"
              className="testimg cardImg"
            />
          </Col>
          <Col sm md="5" className="text">
            <CardBody>
              <CardTitle>Card Title</CardTitle>
              <CardText>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Fugiat, asperiores cumque, consectetur impedit veritatis
                architecto quisquam, omnis ut reprehenderit eum nemo quibusdam
                modi labore veniam.
              </CardText>
              <CardText>
                <blockquote className="text-success">- John Doe</blockquote>
              </CardText>
            </CardBody>
          </Col>
        </Row>
      </Card>

      {/* Main Card 2 */}

      <Card>
        <Row>
          <Col sm md="5" className="text">
            <span className="ribbon">Feautured</span>
            <CardBody>
              <CardTitle>Card Title</CardTitle>
              <CardText>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Fugiat, asperiores cumque, consectetur impedit veritatis
                architecto quisquam, omnis ut reprehenderit eum nemo quibusdam
                modi labore veniam.
              </CardText>
              <CardText>
                <blockquote className="text-success">- John Doe</blockquote>
              </CardText>
            </CardBody>
          </Col>
          <Col sm md="7" className="p-0">
            <CardImg
              width="100%"
              src="https://images.unsplash.com/photo-1480506132288-68f7705954bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="Card image cap"
              className="testimg cardImg2"
            />
          </Col>
        </Row>
      </Card>
    </div>
  );
}
