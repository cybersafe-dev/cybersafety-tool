import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Question from "../components/question"

const IndexPage = ({ location }) => {
  const { state = {} } = location
  const { survey, category } = state

  return (
    <Layout>
      <SEO title="Survey" />
      <Question survey={survey} category={category} />
    </Layout>
  )
}
export default IndexPage
