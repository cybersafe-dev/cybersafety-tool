import React from "react"
import { navigate } from "gatsby"
import DataErrorPage from "../../components/dataerror/dataerror"
import { ResponseStore } from "../../providers/responseProvider"
import { LanguageStore } from "../../providers/languageProvider"

import SEO from "../seo"

import "../../styling/survey/question.css"

const Question = ({
  survey,
  category,
  currentQ,
  setCurrentQ,
  sectionLength,
  questionMessageData,
}) => {
  // eslint-disable-next-line
  const [store, dispatch] = React.useContext(ResponseStore)
  const [irish] = React.useContext(LanguageStore)
  const [sectionResponses, setSectionResponses] = React.useState([])
  const [hint, setHint] = React.useState("")
  const lowerCategory = category.replace(" ", "").toLowerCase()

  React.useEffect(() => {
    let surveyHints
    if (!irish) {
      surveyHints =
        questionMessageData.english.edges[0].node.childMarkdownRemark
          .frontmatter.surveyHints
    } else {
      surveyHints =
        questionMessageData.irish.edges[0].node.childMarkdownRemark
          .frontmatter.surveyHintsIrish
    }
    if (currentQ === sectionLength - 1) {
      setHint(surveyHints.last)
    } else {
      setHint(surveyHints.general)
    }
    // eslint-disable-next-line
  }, [irish, currentQ])

  React.useEffect(() => {
    store.responses.forEach(response => {
      if (Object.keys(response).includes(lowerCategory)) {
        navigate("/survey/dashboard/")
      }
    })
    // eslint-disable-next-line
  }, [])

  React.useEffect(() => {
    if (sectionResponses.length === sectionLength) {
      dispatch({
        type: "RECORD_RESPONSES",
        payload: { [lowerCategory]: sectionResponses },
      })
    }
    // eslint-disable-next-line
  }, [sectionResponses])

  if (!survey) {
    return <DataErrorPage />
  }

  const nextQuestion = async e => {
    const { id } = e.target
    if (currentQ < sectionLength - 1) {
      await setSectionResponses([...sectionResponses, id])
      setCurrentQ(currentQ + 1)
    } else if (currentQ === sectionLength - 1) {
      await setSectionResponses([...sectionResponses, id])
      navigate("/survey/dashboard/")
    }
  }

  return (
    <>
      <SEO title={category} />
      <p className="statement">{survey[currentQ].statement}</p>
      <section className="responses">
        {survey[currentQ].responses.map((response, i) => (
          <button
            onClick={nextQuestion}
            className="response-option"
            key={response.answer}
            id={i + 1}
          >
            {response.answer}
          </button>
        ))}
        <p className="tip">{hint}</p>
      </section>
    </>
  )
}

export default Question
