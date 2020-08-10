import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Header from "../components/header/header"
import SEO from "../components/seo"
import BgImg from "../images/bg-gradient.svg"
import Rocket from "../images/rocket.svg"

import "../styling/thankyou.css"

const ThankYou = props => {
  //const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter

  return (
    <Layout>
      <Header />
      <SEO title="Thank you page" />
      <section className="thanks-container">
        <h1 className="thanks-title">Thank you!</h1>
        <img src={BgImg} alt="background design" className="bg-img5" />
        <img src={Rocket} alt="rocket icon" className="rocket" />
        <p>
          {" "}
          Your answers have been sent off to the cloud. You can close this
          window now.{" "}
        </p>
        <Link to="/index/" className="close-btn">
          Close
        </Link>
      </section>
    </Layout>
  )
}
export default ThankYou
