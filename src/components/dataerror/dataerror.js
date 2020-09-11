import React from "react"
import Layout from "../../components/layout/layout"
import Header from "../../components/header/header"
import SEO from "../../components/seo"
import "../../styling/errorPage.css"
import unknown from "../../images/unknown.svg"

const DataErrorPage = () => (
  <Layout>
    <SEO title="Data Error" />
    <Header />
    <section className="page-container">
      <h1 className="error-heading">Data Error</h1>
      <img src={unknown} alt="Question Mark" className="unknown" />
      <p className="message">Oops...we lost some important data along the way!</p>
      <p className="message">Sorry about that. Please start your survey again from the full link you were sent.</p>
    </section>
  </Layout>
)

export default DataErrorPage
