import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { LanguageStore } from "../../providers/languageProvider"

import Layout from "../../components/layout/layout"
import Question from "../../components/category/question"
import ProgressBar from "../../components/category/progressBar"
import CategoryProgress from "../../components/category/categoryProgress"
import DataErrorPage from "../../components/dataerror/dataerror"
import LanguageToggle from "../../components/dashboard/languageToggle"
import BgImg from "../../images/bg-gradient.svg"

import "../../styling/survey/question.css"

const Category = props => {

  const questionMessageData = useStaticQuery(
    graphql`
      query {
        allFile(filter: {sourceInstanceName: {eq: "content"}, name: {in: ["hints", "irishhints"]}}) {
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
                  surveyHintsIrish {
                    general
                    last
                  }
                  surveyProgressIrish {
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
  const { surveyData, category } = state
  const [irish] = React.useContext(LanguageStore)
  const [survey, setSurvey] = React.useState(surveyData.english)
  const [currentQ, setCurrentQ] = React.useState(0)

  React.useEffect(() => {
    if (irish) {
      setSurvey(surveyData.irish)
    } else {
      setSurvey(surveyData.english)
    }
    //eslint-disable-next-line
  }, [irish])
  
  if (!survey) {
    return <DataErrorPage />
  }

  const sectionLength = survey.length

  return (
    <Layout>
      <>
        <img src={BgImg} alt="background design" className="bg-img-q" />
        <h1 className="question-title">{category}</h1>
        <LanguageToggle />
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
