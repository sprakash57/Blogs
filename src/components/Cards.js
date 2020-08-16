import React from "react";
import { Link } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";

import "../sass/cards.sass";

import {
  Container,
  Card,
  CardTitle,
  CardText,
  CardBody,
  Row,
  Col,
  CardImg,
} from "reactstrap";

export default function Cards({ data }) {
  return (
    <Container>
      {data.edges
        .filter((e) => e.node.frontmatter.featuredpost === true)
        .map((e) => (
          // <Card className="d-sm-block">
          //   <span className="ribbon">Featured</span>
          //   <Row>
          //     <Col sm md="5" className="text">
          //       <CardBody>
          //         <CardTitle>
          //           <Link
          //             to={e.node.fields.slug}
          //             className="featured-title hover-underline"
          //           >
          //             {e.node.frontmatter.title}
          //           </Link>
          //         </CardTitle>
          //         <CardText>{e.node.frontmatter.description}</CardText>
          //         <CardText>
          //           <blockquote className="text-success">
          //             {e.node.frontmatter.author}
          //           </blockquote>
          //         </CardText>
          //       </CardBody>
          //     </Col>
          //     <Col sm="" md="7" className="p-0">
          //       <CardImg
          //         src="https://images.unsplash.com/photo-1480506132288-68f7705954bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          //         alt=""
          //         className="cardImg"
          //       />
          //     </Col>
          //   </Row>
          // </Card>
          <div
            className="featured-card"
            style={{
              margin: "1em 0",
            }}
          >
            <div className="featured-card-grid">
              <div className="featured-content">
                <div className="overlay-ribbon">
                  <span className="ribbon">Featured</span>
                </div>
                <h1>
                  <a href={e.node.fields.slug}>{e.node.frontmatter.title}</a>
                </h1>
                <p>{e.node.frontmatter.description}</p>
                <p>{e.node.frontmatter.author}</p>
              </div>
              <div className="featured-image-holder">
                <img src={e.node.frontmatter.featuredimage} />
              </div>
            </div>
          </div>
        ))}
    </Container>
  );
}
