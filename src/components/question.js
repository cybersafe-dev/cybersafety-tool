import React from "react"
import DataErrorPage from "../components/dataerror/dataerror"

import "../styling/question.css"

const Question = ({ survey, category }) => {
  const [currentQ, setCurrentQ] = React.useState(0)

  if (!survey) {
    return <DataErrorPage />
  }

  const sectionLength = survey.length

  const nextQuestion = () => {
    if (currentQ < sectionLength - 1) {
      setCurrentQ(currentQ + 1)
    } else return
  }

  return (
    <>
      <h1 className="category-title">{category}</h1>
      <section className="category-container">
        <p className="statement">{survey[currentQ].statement}</p>
        <ul className="responses">
          {survey[currentQ].responses.map(response => (
            <li className="response-option" key={response.answer}>
              {response.answer}
            </li>
          ))}
        </ul>

        <button onClick={nextQuestion} className="nxt-btn">
          Next
        </button>
      </section>
    </>
  )
}

export default Question
