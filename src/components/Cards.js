import React from "react";
import { Link } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";

import "../sass/cards.sass";

import {
  Container,
} from "reactstrap";

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
                <h3>Featured</h3>
                <h1><a href={e.node.fields.slug}>{e.node.frontmatter.title}</a></h1>
                <p>{e.node.frontmatter.description}</p>
                <p>{e.node.frontmatter.author}</p>
              </div>
              <div className="featured-image-holder">
                <img
                  src={"/img/" + e.node.frontmatter.featuredimage.relativePath}
                />
              </div>
            </div>
          </div>
        ))}
    </Container>
  );
}
