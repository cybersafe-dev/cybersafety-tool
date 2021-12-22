import React from "react"

import { LanguageStore } from "../../providers/languageProvider"

import "../../styling/app/surveyStats.css"

import leaders from "../../images/leader.svg"
import teachers from "../../images/teacher.svg"
import pupils from "../../images/pupil.svg"
import greenTick from "../../images/green-tick.svg"

const SurveyQuotaBox = ({ userType, scores, quota }) => {
  const [irish] = React.useContext(LanguageStore)

  let thisImage
  let thisLabel
  let thisLabelIfIrish
  switch (userType) {
    case "School Leaders":
      thisImage = leaders
      thisLabel = "School Leaders"
      thisLabelIfIrish = "Ceannairí"
      break
    case "Teachers":
      thisImage = teachers
      thisLabel = "Teachers"
      thisLabelIfIrish = "Múinteoirí"
      break
    case "Pupils":
      thisImage = pupils
      thisLabel = "Pupils"
      thisLabelIfIrish = "Daltaí"
      break
    default:
      return null
  }

  return (
    <section className="quota-box">
      {scores >= quota ? (
        <img
          src={greenTick}
          alt="Leaders surveys complete"
          className="quota-box-tick"
        />
      ) : (
        <img src={thisImage} alt={userType} className="quota-box-icon" />
      )}
      <div className="quota-info">
        <p className="quota-fraction">
          {scores}/{quota}
        </p>
        <p className="quota-user">{irish ? thisLabelIfIrish : thisLabel}</p>
      </div>
    </section>
  )
}

export default SurveyQuotaBox
