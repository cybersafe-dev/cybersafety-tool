import React from "react"
import { Link, navigate } from "gatsby"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"

const DataErrorPage = () => {
  React.useEffect(() => {
    navigate("/")
  })
  return (
    <Layout>
      <SEO title="Data error" />
      <h1>Data Error</h1>
      <p>This page cannot be accessed by this method</p>
      <Link to="/">Go back home</Link>
    </Layout>
  )
}

export default DataErrorPage
