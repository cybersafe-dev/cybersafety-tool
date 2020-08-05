import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Header from "../components/header/header"
import SEO from "../components/seo"

const RoleSelection = props => {
    //const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  
    return (
      <Layout>
        <Header />
        <SEO title="Enter Your Role at School" />
        <h1>I am a...</h1>
        <Link to="/dashboard/" state={{user: "leaders"}}>School Leader</Link> <br />
        <Link to="/dashboard/" state={{user: "teachers"}}>Teacher</Link> <br />
        <Link to="/dashboard/" state={{user: "pupils"}}>Pupil</Link> <br />
      </Layout>
    )
  }
  export default RoleSelection