import React from "react"
import "../../styling/survey/dashboard.css"
import SubmitButton from "./submitButton"

import { LanguageStore } from "../../providers/languageProvider"

const SurveyProgress = ({ completedSections, setError }) => {
  const [irish] = React.useContext(LanguageStore)

  return (
    <section className="survey-progress">
      <h1 className="fraction">
        {completedSections.length - 1} <span className="slash">/</span> 6
      </h1>
      <p className="fraction-text">
        {irish ? "Catagóirí críochnaithe" : "categories completed"}
      </p>
      {completedSections.length - 1 === 6 ? (
        <SubmitButton setError={setError} />
      ) : null}
    </section>
  )
}

export default SurveyProgress
