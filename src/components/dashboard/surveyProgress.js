import React from "react"
import "../../styling/survey/dashboard.css"
import SubmitButton from "./submitButton"

const SurveyProgress = ({ completedSections, setError }) => {
  return (
    <section className="survey-progress">
      <h1>{completedSections.length - 1}/6</h1>
      <p>categories completed</p>
      {completedSections.length - 1 === 6 ? <SubmitButton setError={setError} /> : null}
    </section>
  )
}

export default SurveyProgress
