import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Header from "../components/header/header"
import SEO from "../components/seo"

const SchoolId = props => {
    //const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  
    return (
      <Layout>
        <Header />
        <SEO title="Enter School Id" />
        <h1>First step...</h1>
        <input type="text" placeholder="e.g. SP0001abx" />
        <Link to="/roleselection/">Next</Link> <br />
      </Layout>
    )
  }
  export default SchoolId