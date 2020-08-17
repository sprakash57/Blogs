import React from "react";
import { graphql } from "gatsby";
import { Container } from "reactstrap";

import Layout from "../../components/Layout";

export default ({data}) => {
  return (
    <Layout>
      <Container className="mt-3">
        <h1>Hello!</h1>
        <p>
            {data.allMarkdownRemark.totalCount}
        </p>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query CategoryQuery {
    allMarkdownRemark {
      totalCount
    }
  }
`;
