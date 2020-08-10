import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Question from "../components/question"
import { ResponseStore } from "../providers/responseProvider"

const Category = (props) => {
  const { state = {} } = props.location
  const { survey, category } = state
  const [data] = React.useContext(ResponseStore);
  console.log({data})

  return (
    <Layout>
      <SEO title="Survey" />
      <Question survey={survey} category={category} />
    </Layout>
  )
}
export default Category
