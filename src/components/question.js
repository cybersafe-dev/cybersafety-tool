import React from "react"
import { navigate } from "gatsby"
import DataErrorPage from "../components/dataerror/dataerror"
import { ResponseStore } from "../providers/responseProvider"
import BgImg from "../images/bg-gradient.svg"

import "../styling/question.css"

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
  const [sectionResponses, setSectionResponses] = React.useState([])
  const lowerCategory = category.replace(" ", "").toLowerCase()

  const {
    surveyHints,
  } = questionMessageData.allFile.edges[0].node.childMarkdownRemark.frontmatter

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
      navigate("/dashboard/")
    }
  }

  return (
    <>
      <h1 className="category-title">{category}</h1>

      <section className="category-container">
        <img src={BgImg} alt="background design" className="bg-img5" />
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
        </section>
      </section>
      {currentQ === sectionLength - 1 ? (
        <p className="tip">{surveyHints.last}</p>
      ) : (
        <p className="tip">{surveyHints.general}</p>
      )}
    </>
  )
}

export default Question
