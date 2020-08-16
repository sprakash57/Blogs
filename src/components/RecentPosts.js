import React from "react";
import { Link } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";

import "../sass/sections.sass";
import "../sass/cards.sass";
import { Container } from "reactstrap";

const RecentPosts = ({ data }) => {
  return (
    <div className="cover">
      <Container>
        <div className="headerPost">Recent Posts</div>
        <div className="underline2"></div>
        <div className="scroll-cards mx-2">
          {data.edges
            .filter((e) => e.node.frontmatter.templateKey === "blog-post")
            .map((e) => (
              <div className="scroll-card">
                <Link to={e.node.fields.slug}>
                  <div className="scroll-card-img">
                    <img
                      width="100%"
                      src={
                        e.node.frontmatter.featuredimage != null
                          ? e.node.frontmatter.featuredimage
                          : "https://increasify.com.au/wp-content/uploads/2016/08/default-image.png"
                      }
                      alt={e.node.frontmatter.title}
                      className=" topPostImg"
                    />
                  </div>
                </Link>
                <div className="scroll-card-content">
                  <h5>
                    <Link to={e.node.fields.slug}>
                      {e.node.frontmatter.title}
                    </Link>
                  </h5>
                  <p>
                    {e.node.frontmatter.description.substring(0, 125) + "..."}
                  </p>
                  <p className="text-success scroll-card-author">
                    {e.node.frontmatter.author}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default RecentPosts;
