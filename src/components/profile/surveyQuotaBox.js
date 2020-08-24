import React from "react"

import "../../styling/app/surveyStats.css"

import leaders from "../../images/leader.svg"
import teachers from "../../images/teacher.svg"
import pupils from "../../images/pupil.svg"

const SurveyQuotaBox = ({ userType, scores, quota }) => {
    let thisImage;
  switch (userType) {
    case "School Leaders":
      thisImage = leaders
      break
    case "Teachers":
      thisImage = teachers
      break
    case "Pupils":
      thisImage = pupils
      break
    default:
      return null
  }

  return (
    <section className="quota-box">
      <img src={thisImage} alt={userType} className="quota-box-icon" />
      <div className="quota-info">
        <p className="quota-fraction">
          {scores}/{quota}
        </p>
        <p>{userType}</p>
      </div>
    </section>
  )
}

export default SurveyQuotaBox
