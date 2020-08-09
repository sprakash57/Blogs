import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Jumbotron from "../components/Jumbotron";

import MyCard from "../components/Cards";
import TopPosts from "../components/TopPosts";
import Categories from "../components/Categories";
import RecentPosts from "../components/RecentPosts";

import About from "../components/About";

export const IndexPageTemplate = ({ data }) => (
  // {
  //   image,
  //   title,
  //   heading,
  //   subheading,
  //   mainpitch,
  //   description,
  //   intro,
  // }
  <div>
    {data.allMarkdownRemark.edges.filter(e => e.node.frontmatter.templateKey === 'blog-post').map((element) => (
      <>
        <h2>{element.node.frontmatter.title}</h2>
        <h5>{element.node.frontmatter.templateKey}</h5>
      </>
    ))}
    <Jumbotron />

    <MyCard />
    <TopPosts />
    <Categories />
    <RecentPosts />
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
  // const { frontmatter } = data.markdownRemark;

  // const data = useStaticQuery(graphql`
  //   query{
  //     site{
  //       siteMetadata{
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <Layout>
      <IndexPageTemplate
        data={data}
        // image={frontmatter.image}
        // title={frontmatter.title}
        // heading={frontmatter.heading}
        // subheading={frontmatter.subheading}
        // mainpitch={frontmatter.mainpitch}
        // description={frontmatter.description}
        // intro={frontmatter.intro}
      />
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
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            templateKey
          }
        }
      }
    }
  }
`;
