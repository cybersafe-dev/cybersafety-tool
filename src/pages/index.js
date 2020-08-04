import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Header from "../components/header/header"
import SEO from "../components/seo"

const IndexPage = props => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter

  return (
    <Layout>
      <Header />
      <SEO title="Home" />
      <h1> {data.title} </h1>
      <p> {data.body.paragraph1} </p>
      <p> {data.body.paragraph2} </p>
      <p> {data.body.paragraph3} </p>
      <Link to="/survey/">Survey</Link> <br />
    </Layout>
  )
}
export default IndexPage

export const query = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "content" }
        name: { eq: "infopage" }
      }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              body {
                paragraph1
                paragraph2
                paragraph3
              }
            }
          }
        }
      }
    }
  }
`
