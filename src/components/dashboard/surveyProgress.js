import React from "react"
import "../../styling/survey/dashboard.css"
import SubmitButton from "./submitButton"

const SurveyProgress = ({ completedSections, setError }) => {
  return (
    <section className="survey-progress">
        <h1 className="fraction">{completedSections.length - 1}/6</h1>
        <p className="fraction-text">categories completed</p>
      {completedSections.length - 1 === 6 ? (
        <SubmitButton setError={setError} />
      ) : null}
    </section>
  )
}

export default SurveyProgress
