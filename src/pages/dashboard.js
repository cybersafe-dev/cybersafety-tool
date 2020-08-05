import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import BgImg from "../images/bg-shape.svg"
import FileImg from "../images/file-graphic.svg"

import "../styling/dashboard.css"

const Dashboard = ({ location }) => {
  const { state = {} } = location
  const { user } = state
  console.log(user)
  //const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <Layout>
      <SEO title="Your Survey Dashboard" />
      <section className="dashboard-container">
        <h1 className="title">Your time starts now!</h1>
        <p className="explain">
          Click on a key to answer the questions for that category. See if you
          can complete all the categories before the timer runs out.
        </p>
        <img src={BgImg} alt="background design" className="bg-img3" />
        <img src={BgImg} alt="background design" className="bg-img4" />
        <div className="categories">
          <Link to="/digitalknowledge/">Digital Knowledge</Link> <br />
          <Link to="/privacy/">Privacy</Link> <br />
          <Link to="/sharing/">Sharing</Link> <br />
          <Link to="/communication/">Communication</Link> <br />
          <Link to="/criticalthinking/">Critical Thinking</Link> <br />
          <Link to="/responsibleuse/">Responsible Use</Link> <br />
        </div>
        <img src={FileImg} alt="background design" className="file-image" />
      </section>
    </Layout>
  )
}
export default Dashboard
