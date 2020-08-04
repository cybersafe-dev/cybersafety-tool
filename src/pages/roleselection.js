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
        <Link to="/dashboard/" state={{user: "leader"}}>School Leader</Link> <br />
        <Link to="/dashboard/" state={{user: "teacher"}}>Teacher</Link> <br />
        <Link to="/dashboard/" state={{user: "pupil"}}>Pupil</Link> <br />
      </Layout>
    )
  }
  export default RoleSelection