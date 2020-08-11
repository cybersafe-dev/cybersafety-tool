import React from "react"
import { navigate } from "gatsby"
import DataErrorPage from "../components/dataerror/dataerror"
import { ResponseStore } from "../providers/responseProvider"
import BgImg from "../images/bg-gradient.svg"
import Progress from "./progress"

import "../styling/question.css"

const Question = ({ survey, category }) => {
  // eslint-disable-next-line
  const [store, dispatch] = React.useContext(ResponseStore)
  const [currentQ, setCurrentQ] = React.useState(0)
  const [sectionResponses, setSectionResponses] = React.useState([])

  React.useEffect(() => {
    //console.log(sectionResponses)
    if (sectionResponses.length === sectionLength) {
      dispatch({
        type: "RECORD_RESPONSES",
        payload: { [category]: sectionResponses },
      })
    }
    // eslint-disable-next-line
  }, [sectionResponses])

  if (!survey) {
    return <DataErrorPage />
  }

  const sectionLength = survey.length

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
        <Progress done={currentQ} sectionLength={sectionLength} />

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
      <p className="tip">Click one of the buttons to choose an answer.</p>
    </>
  )
}

export default Question
