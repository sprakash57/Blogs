import React from "react";

import { Link } from "gatsby";

import "bootstrap/dist/css/bootstrap.min.css";
import "../sass/sections.sass";
import "../sass/cards.sass";

import {
  Container
} from "reactstrap";

const TopPosts = ({ data }) => {
  return (
    <Container>
      <div className="header">Top Posts</div>
      <div className="underline"></div>
      <div className="scroll-cards">
        {data.edges
          .filter((e) => e.node.frontmatter.templateKey === "blog-post")
          .map((e) => (
            <div className="scroll-card">
              <div className="scroll-card-img">
                <img
                  width="100%"
                  src={
                    e.node.frontmatter.featuredimage != null
                      ? "/img/" + e.node.frontmatter.featuredimage.relativePath
                      : "https://increasify.com.au/wp-content/uploads/2016/08/default-image.png"
                  }
                  alt="Card image cap"
                  className=" topPostImg"
                />
              </div>
              <div className="scroll-card-content">
                <h5>{e.node.frontmatter.title}</h5>
                <p>{e.node.frontmatter.description.substring(0, 125) + "..."}</p>
                <p className="text-success">{e.node.frontmatter.author}</p>
              </div>
            </div>
            // <Col sm="12" md="6" lg="6" className="p-0">
            //   <Card className="topPostCard">
            //     <Row>
            //       <Col sm md="5" className="p-0">
            //         <Link to="#">
            //           <CardImg
            //             width="100%"
            //             src={
            //               e.node.frontmatter.featuredimage != null
            //                 ? "/img/" +
            //                   e.node.frontmatter.featuredimage.relativePath
            //                 : "https://increasify.com.au/wp-content/uploads/2016/08/default-image.png"
            //             }
            //             alt="Card image cap"
            //             className=" topPostImg"
            //           />
            //         </Link>
            //       </Col>

            //       <Col sm md className="topPostText p-3">
            //         <CardBody>
            //           <CardTitle>{e.node.frontmatter.title}</CardTitle>
            //           <CardText>{e.node.frontmatter.description}...</CardText>
            //           <CardText className="text-success">
            //             {e.node.frontmatter.author}
            //           </CardText>
            //         </CardBody>
            //       </Col>
            //     </Row>
            //   </Card>
            // </Col>
          ))}
      </div>
      <hr />
    </Container>
  );
};

export default TopPosts;
