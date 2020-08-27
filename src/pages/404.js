import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import "../styling/errorPage.css"
import unknown from "../images/unknown.svg"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="page-container">
      <h1 className="error-heading">Not Found</h1>
      <img src={unknown} alt="Question Mark" className="unknown" />
      <p>Sorry, the page you tried to reach does not exist.</p>
      <p>
        If you were trying to sign your school up for the self-assessment tool{" "}
        <Link to="/">try here</Link>.
      </p>
      <p>
        If you were sent a survey link to fill in{" "}
        <Link to="/survey">try here instead</Link>.
      </p>
    </section>
  </Layout>
)

export default NotFoundPage
