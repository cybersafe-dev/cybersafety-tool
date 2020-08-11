import React from "react"

import Layout from "../components/layout/layout"
import Header from "../components/header/header"
import SEO from "../components/seo"

import Timer from "../components/timer"

const Counter = props => {
  return (
    <Layout>
      <Header />
      <SEO title="Timer" />
      <Timer />
    </Layout>
  )
}
export default Counter
