import React from "react"
import { navigate } from "gatsby"
import "../../styling/app/surveyStats.css"
import { getUserDocument } from "../../firebase"

import SurveyQuotaBox from "./surveyQuotaBox"
import greenTick from "../../images/green-tick.svg"

const SurveyStats = ({ uid }) => {
  const [currentScores, setCurrentScores] = React.useState(null)

  React.useEffect(() => {
    const getScores = async () => {
      await getUserDocument(uid).then(async updatedUserDoc => {
        if (updatedUserDoc) {
          await setCurrentScores(updatedUserDoc.scores)
        } else return
      })
    }
    getScores()
  }, [uid])

  // Good for debugging
  // React.useEffect(() => {
  //   console.log({ currentScores })
  // }, [currentScores])

  if (!uid || !currentScores) return <p>Loading...</p>

  const handleFinalSubmit = () => {
    navigate("/app/confirmation")
  }

  const quota = {
    leadersQuota: 5,
    teachersQuota: 5,
    pupilsQuota: 5,
  }

  const leadersFilledSurveys = currentScores.leaders.length
  const teachersFilledSurveys = currentScores.teachers.length
  const pupilsFilledSurveys = currentScores.pupils.length
  const { leadersQuota, teachersQuota, pupilsQuota } = quota

  return (
    <section className="survey-stats">
      <section className="leaders-box">
        <SurveyQuotaBox
          userType={"School Leaders"}
          scores={leadersFilledSurveys}
          quota={leadersQuota}
        />
        {leadersFilledSurveys >= leadersQuota ? (
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
          scores={teachersFilledSurveys}
          quota={teachersQuota}
        />
        {teachersFilledSurveys >= teachersQuota ? (
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
          scores={pupilsFilledSurveys}
          quota={pupilsQuota}
        />
        {pupilsFilledSurveys >= pupilsQuota ? (
          <img
            src={greenTick}
            alt="Pupils surveys complete"
            className="quota-box-icon"
          />
        ) : null}
      </section>
      {leadersFilledSurveys >= leadersQuota &&
      teachersFilledSurveys >= teachersQuota &&
      pupilsFilledSurveys >= pupilsQuota ? (
        <button className="final-submit-button" onClick={handleFinalSubmit}>
          Submit
        </button>
      ) : null}
    </section>
  )
}

export default SurveyStats
