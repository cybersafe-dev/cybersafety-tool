import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>This page does not exist.</p>
    <Link to="/">Go back home</Link>
  </Layout>
)

export default NotFoundPage
