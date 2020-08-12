import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Question from "../components/question"
import Progress from "../components/progress"
import CategoryProgress from "../components/categoryProgress"
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
      <Progress done={currentQ} sectionLength={sectionLength} />
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
