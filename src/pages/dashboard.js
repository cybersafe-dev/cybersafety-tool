import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const Dashboard = ({location}) => {
    const { state = {} } = location
    const { user } = state
    console.log(user);
    //const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
    return (
      <Layout>
        <SEO title="Your Survey Dashboard" />
        <h1>Your dashboard</h1>
        
        <Link to="/digitalknowledge/">Digital Knowledge</Link> <br />
        <Link to="/privacy/">Privacy</Link> <br />
        <Link to="/sharing/">Sharing</Link> <br />
        <Link to="/communication/">Communication</Link> <br />
        <Link to="/criticalthinking/">Critical Thinking</Link> <br />
        <Link to="/responsibleuse/">Responsible Use</Link> <br />

      </Layout>
    )
  }
  export default Dashboard