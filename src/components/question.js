import React from "react"
import DataErrorPage from "../components/dataerror/dataerror"

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
    <section>
      <h1>{category}</h1>
      <p>{survey[currentQ].statement}</p>
      <ul>
        {survey[currentQ].responses.map(response => (
          <li key={response.answer}>{response.answer}</li>
        ))}
      </ul>
      <button onClick={nextQuestion}>Next</button>
    </section>
  )
}

export default Question
