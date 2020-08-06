import React from "react";
import PropTypes from "prop-types";
// import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Jumbotron from "../components/Jumbotron";

import MyCard from "../components/Cards";
import TopPosts from "../components/TopPosts";
import Categories from "../components/Categories";
import RecentPosts from "../components/RecentPosts";

import About from "../components/About";

export const IndexPageTemplate = () => (
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

const IndexPage = () => {
  // const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
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

// export const pageQuery = graphql`
//   query IndexPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
//       frontmatter {
//         title
//         image {
//           childImageSharp {
//             fluid(maxWidth: 2048, quality: 100) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         heading
//         subheading
//       }
//     }
//   }
// `;
