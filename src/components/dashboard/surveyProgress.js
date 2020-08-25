import React from "react"
import "../../styling/survey/dashboard.css"
import SubmitButton from "./submitButton"

const SurveyProgress = ({ completedSections, setError }) => {
  return (
    <section className="survey-progress">
      <div className="fraction">
        <h1 className="fraction-text">{completedSections.length - 1}/6</h1>
        <p className="categories-completed">categories completed</p>
      </div>
      {completedSections.length - 1 === 6 ? (
        <SubmitButton setError={setError} />
      ) : null}
    </section>
  )
}

export default SurveyProgress
