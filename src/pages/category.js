import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Question from "../components/category/question"
import ProgressBar from "../components/category/progressBar"
import CategoryProgress from "../components/category/categoryProgress"
import DataErrorPage from "../components/dataerror/dataerror"

const Category = props => {
  const { state = {} } = props.location
  const { survey, category } = state
  const [currentQ, setCurrentQ] = React.useState(0)
  if (!survey) {
    return <DataErrorPage />
  }
  const sectionLength = survey.length

  return (
    <Layout>
      <SEO title="Survey" />
      <ProgressBar done={currentQ} sectionLength={sectionLength} />
      <Question
        survey={survey}
        category={category}
        currentQ={currentQ}
        setCurrentQ={setCurrentQ}
        sectionLength={sectionLength}
      />
      <CategoryProgress currentQ={currentQ} sectionLength={sectionLength} />
    </Layout>
  )
}
export default Category
