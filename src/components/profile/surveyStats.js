import React from "react"
import { navigate } from "gatsby"
import "../../styling/app/surveyStats.css"

import SurveyQuotaBox from "./surveyQuotaBox"
import greenTick from "../../images/green-tick.svg"

const SurveyStats = () => {
  const handleFinalSubmit = () => {
    navigate("/app/thankyou")
  }

  const dummyDb = {
    leaders: [2, 3, 4, 5, 1],
    teachers: [3, 4, 3, 2, 1, 1, 2],
    pupils: [1, 2, 3, 4, 5, 3, 3, 2, 2, 1, 1, 1, 1, 2, 3],
  }

  const quota = {
    leadersQuota: 5,
    teachersQuota: 10,
    pupilsQuota: 30,
  }

  const { leaders, teachers, pupils } = dummyDb
  const { leadersQuota, teachersQuota, pupilsQuota } = quota

  return (
    <section className="survey-stats">
      <section className="leaders-box">
        <SurveyQuotaBox
          userType={"School Leaders"}
          scores={leaders}
          quota={leadersQuota}
        />
        {leaders.length === leadersQuota ? (
          <img
            src={greenTick}
            alt="Leaders surveys complete"
            className="quota-box-icon"
          />
        ) : null}
      </section>
      <section className="teachers-box">
        <SurveyQuotaBox
          userType={"Teachers"}
          scores={teachers}
          quota={teachersQuota}
        />
        {teachers.length === teachersQuota ? (
          <img
            src={greenTick}
            alt="Teachers surveys complete"
            className="quota-box-icon"
          />
        ) : null}
      </section>
      <section className="pupils-box">
        <SurveyQuotaBox
          userType={"Pupils"}
          scores={pupils}
          quota={pupilsQuota}
        />
        {pupils.length === pupilsQuota ? (
          <img
            src={greenTick}
            alt="Pupils surveys complete"
            className="quota-box-icon"
          />
        ) : null}
      </section>
      <button className="final-submit-btn" onClick={handleFinalSubmit}>
        Submit
      </button>
    </section>
  )
}

export default SurveyStats
