import React from "react"
import "../../styling/dashboard.css"
const SurveyProgress = ({ completedSections }) => {
  return (
    <section className="survey-progress">
      <h1>{completedSections.length - 1}/6</h1>
      <p>categories completed</p>
    </section>
  )
}

export default SurveyProgress
