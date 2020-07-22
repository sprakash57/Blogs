import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { Container } from 'reactstrap'

import Layout from "../components/Layout";

import MyCard from '../components/_Cards'

export const IndexPageTemplate = (
  {
    //   image,
    //   title,
    //   heading,
    //   subheading,
    //   mainpitch,
    //   description,
    //   intro,
  }
) => (
  <div>
    <section className="section-home">
      <div className="box">
        <h1>
          <span style={{ fontSize: "1.2em" }}>KJSCE</span>
          <br /> 
          <span style={{ fontSize: "3em" }}>Codecell</span>
        </h1>
        <h2>Tagline</h2>
      </div>
    </section>
    <Container>
        <MyCard />
    </Container>
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
  const { frontmatter } = data.markdownRemark;

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

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
      }
    }
  }
`;
