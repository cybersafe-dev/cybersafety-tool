import React from "react"
import { navigate } from "gatsby"
import "../../styling/app/surveyStats.css"
import { getUserDocument } from "../../firebase"
import { store } from "../../providers/userProvider"

import SurveyQuotaBox from "./surveyQuotaBox"
import greenTick from "../../images/green-tick.svg"

const SurveyStats = () => {
  const [scores, setScores] = React.useState(null)
  const [user] = React.useContext(store)
  const { uid } = user

  React.useEffect(() => {
    const getScores = async () => {
      const updatedUserDoc = await getUserDocument(uid)
      const { scores } = updatedUserDoc
      setScores(scores)
    }
    getScores()
  }, [uid])

  React.useEffect(() => {
    console.log({ scores })
  }, [scores])

  if (!uid) return <p>Loading...</p>

  const handleFinalSubmit = () => {
    navigate("/app/confirmation")
  }

  const quota = {
    leadersQuota: 5,
    teachersQuota: 5,
    pupilsQuota: 5,
  }

  const leadersFilledSurveys = scores.leaders.sharing.length
  const teachersFilledSurveys = scores.teachers.sharing.length
  const pupilsFilledSurveys = scores.pupils.sharing.length
  const { leadersQuota, teachersQuota, pupilsQuota } = quota

  return (
    <section className="survey-stats">
      <section className="leaders-box">
        <SurveyQuotaBox
          userType={"School Leaders"}
          scores={leadersFilledSurveys}
          quota={leadersQuota}
        />
        {leadersFilledSurveys === leadersQuota ? (
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
        {teachersFilledSurveys === teachersQuota ? (
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
        {pupilsFilledSurveys === pupilsQuota ? (
          <img
            src={greenTick}
            alt="Pupils surveys complete"
            className="quota-box-icon"
          />
        ) : null}
      </section>
      {leadersFilledSurveys === leadersQuota &&
      teachersFilledSurveys === teachersQuota &&
      pupilsFilledSurveys === pupilsQuota ? (
        <button className="final-submit-button" onClick={handleFinalSubmit}>
          Submit
        </button>
      ) : null}
    </section>
  )
}

export default SurveyStats
