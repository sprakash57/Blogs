import React, { useRef, useEffect } from "react";
import { Container } from "reactstrap";

import { TimelineLite, Power3 } from "gsap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../sass/cards.sass";
import "../sass/sections.sass";

export default function Cards({ data }) {
  let textContentHeader = useRef(null);
  let textContentDesc = useRef(null);
  let cardImage = useRef(null);
  let cardAnimation = useRef(null);
  let ribbonAnimation = useRef(null);

  let tl = new TimelineLite();
  let t2 = new TimelineLite();

  useEffect(() => {
    tl.from(textContentHeader, 1, {
      opacity: "0",
      scrollTrigger: ".trigger",
    })
      .from(textContentDesc, 3.5, {
        opacity: "0",
      })
      .from(ribbonAnimation, 0.5, {
        opacity: "0",
        x: -50,
        ease: Power3.easeOut,
      });
    t2.from(cardAnimation, 2, { y: 500, ease: Power3.easeOut }).from(
      cardImage,
      2,
      { filter: "grayscale(100%)", scale: 0.95, scrollTrigger: ".trigger" }
    );
  });
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
            ref={(el) => (cardAnimation = el)}
          >
            <div className="featured-card-grid">
              <div className="featured-content">
                <div className="overlay-ribbon">
                  <span className="ribbon" ref={(el) => (ribbonAnimation = el)}>
                    Featured
                  </span>
                </div>
                <h1 ref={(el) => (textContentHeader = el)}>
                  <a href={e.node.fields.slug}>{e.node.frontmatter.title}</a>
                </h1>
                <div ref={(el) => (textContentDesc = el)} className="trigger">
                  <p>{e.node.frontmatter.description}</p>
                  <p>{e.node.frontmatter.author}</p>
                </div>
              </div>
              <div
                className="featured-image-holder"
                ref={(el) => (cardImage = el)}
              >
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
