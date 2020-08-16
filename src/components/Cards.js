import React from "react";
// import { Link } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";

import "../sass/cards.sass";

import { Container } from "reactstrap";

export default function Cards({ data }) {
  return (
    <Container>
      {data.edges
        .filter((e) => e.node.frontmatter.featuredpost === true)
        .map((e) => (
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
                <img
                  src={"/img/" + e.node.frontmatter.featuredimage.relativePath}
                  alt={e.node.frontmatter.title}
                />
              </div>
            </div>
          </div>
        ))}
    </Container>
  );
}
