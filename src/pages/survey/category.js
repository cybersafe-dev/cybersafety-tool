import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Buffer from "../../components/category/Buffer";
import Layout from "../../components/layout/layout"
import Question from "../../components/category/question"
import ProgressBar from "../../components/category/progressBar"
import CategoryProgress from "../../components/category/categoryProgress"
import DataErrorPage from "../../components/dataerror/dataerror"
import BgImg from "../../images/bg-gradient.svg"

import "../../styling/survey/question.css"

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
      <>
      <Buffer />
        <img src={BgImg} alt="background design" className="bg-img-q" />
        <h1 className="question-title">{category}</h1>
        <section className="question-container">
          <Question
            survey={survey}
            category={category}
            currentQ={currentQ}
            setCurrentQ={setCurrentQ}
            sectionLength={sectionLength}
            questionMessageData={questionMessageData}
          />
        </section>
        <section className="progression">
        <ProgressBar
          done={currentQ}
          sectionLength={sectionLength}
          questionMessageData={questionMessageData}
        />
        <CategoryProgress currentQ={currentQ} sectionLength={sectionLength} />
        </section>
      </>
    </Layout>
  )
}
export default Category
