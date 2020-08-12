import React from "react"
import { useStaticQuery } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Question from "../components/question"
import Progress from "../components/progress"
import CategoryProgress from "../components/categoryProgress"
import DataErrorPage from "../components/dataerror/dataerror"

const Category = props => {
  const questionMessageData = useStaticQuery(
    graphql`
      query {
        allFile(
          filter: {
            sourceInstanceName: { eq: "content" }
            name: { eq: "hints" }
          }
        ) {
          edges {
            node {
              childMarkdownRemark {
                frontmatter {
                  surveyHints {
                    general
                    last
                  }
                  surveyProgress {
                    first
                    last
                    lessThanThree
                    middle
                    penultimate
                  }
                }
              }
            }
          }
        }
      }
    `
  )

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
      <Progress
        done={currentQ}
        sectionLength={sectionLength}
        questionMessageData={questionMessageData}
      />
      <Question
        survey={survey}
        category={category}
        currentQ={currentQ}
        setCurrentQ={setCurrentQ}
        sectionLength={sectionLength}
      />
      <CategoryProgress
        currentQ={currentQ}
        sectionLength={sectionLength}
      />
    </Layout>
  )
}
export default Category
