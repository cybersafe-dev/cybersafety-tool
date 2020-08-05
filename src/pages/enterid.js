import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Header from "../components/header/header"
import SEO from "../components/seo"
import BgImg from "../images/bg-shape.svg"

import "../styling/enterid.css"

const SchoolId = props => {
  //const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter

  return (
    <Layout>
      <Header />
      <SEO title="Enter School Id" />
      <section className="id-container">
        <h1>First step...</h1>
        <img src={BgImg} className="image" />
        <p className="tagline">
          {" "}
          To help us help you, please click and type the School ID you were
          given in the line below.
        </p>
        <input type="text" placeholder="e.g. SP0001abx" className="id-input" />

        <Link to="/roleselection/" className="next-btn">
          Next
        </Link>
      </section>
    </Layout>
  )
}
export default SchoolId
