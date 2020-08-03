import React from "react"

const Question = ({ data }) => {
  // console.log({ data })
  const {
    digitalknowledge
  } = data
  const sectionLength = digitalknowledge.length

  const nextQuestion = () => {
      if (currentQ < sectionLength -1) {
        setCurrentQ(currentQ + 1)
      } else return
  }

  const [currentQ, setCurrentQ] = React.useState(0)
  return (
    <section>
      <h1>Digital Knowledge</h1>
      <p>{digitalknowledge[currentQ].statement}</p>
      <ul>
        {digitalknowledge[currentQ].responses.map(response => (
          <li key={response.answer}>{response.answer}</li>
        ))}
      </ul>
      <button onClick={nextQuestion}>Next</button>
    </section>
  )
}

export default Question
