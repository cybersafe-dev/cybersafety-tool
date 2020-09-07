import React from "react"

import "../../styling/app/surveyStats.css"

import leaders from "../../images/leader.svg"
import teachers from "../../images/teacher.svg"
import pupils from "../../images/pupil.svg"
import greenTick from "../../images/green-tick.svg"


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
      {scores >= quota ? <img
            src={greenTick}
            alt="Leaders surveys complete"
            className="quota-box-tick"
          /> : 
      <img src={thisImage} alt={userType} className="quota-box-icon" /> }
      <div className="quota-info">
        <p className="quota-fraction">
          {scores}/{quota}
        </p>
        <p className="quota-user">{userType}</p>
      </div>
    </section>
  )
}

export default SurveyQuotaBox
