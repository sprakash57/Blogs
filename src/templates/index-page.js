import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Jumbotron from "../components/Jumbotron";

import MyCard from "../components/Cards";
import TopPosts from "../components/TopPosts";
import Categories from "../components/Categories";
import RecentPosts from "../components/RecentPosts";
import SlickSlider from "../components/SlickSlider";

import About from "../components/About";

export const IndexPageTemplate = ({ data }) => (
  <div>
    {/* {data.edges
      .filter((e) => e.node.frontmatter.templateKey === "blog-post")
      .map((element) => (
        <>
          <h2>{element.node.frontmatter.title}</h2>
          <p>{element.node.frontmatter.description}</p>
          <h5>{element.node.frontmatter.date}</h5>
        </>
      ))} */}
    <Jumbotron />

    <MyCard data={data} />
    <TopPosts data={data} />
    {/* <Categories /> */}
    <SlickSlider />
    <RecentPosts data={data} />
    <About />
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <IndexPageTemplate data={data.allMarkdownRemark} />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const indexPageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            author
            templateKey
            featuredpost
            featuredimage {
              relativePath
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
