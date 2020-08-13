import React from "react"
import "../../styling/dashboard.css"
import SubmitButton from "./submitButton"

const SurveyProgress = ({ completedSections }) => {
  return (
    <section className="survey-progress">
      <h1>{completedSections.length - 1}/6</h1>
      <p>categories completed</p>
      {completedSections.length - 1 === 6 ? <SubmitButton /> : null}
    </section>
  )
}

export default SurveyProgress
