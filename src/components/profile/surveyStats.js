import React from "react"
import { navigate } from "gatsby"
import "../../styling/app/surveyStats.css"
import { getUserDocument, postReportToDb } from "../../firebase"
import { createReport } from "../../templates/reportTemplate"

import { LanguageStore } from "../../providers/languageProvider"

import SurveyQuotaBox from "./surveyQuotaBox"

const SurveyStats = ({
  uid,
  schoolName,
  reportSubmitted,
  quota,
  rollNumber,
}) => {
  const [currentScores, setCurrentScores] = React.useState(null)
  const [error, setError] = React.useState(null)
  const [submitting, setSubmitting] = React.useState(false)
  const [irish] = React.useContext(LanguageStore)

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

  if (!uid || !currentScores) return <p>Loading...</p>

  const handleFinalSubmit = async () => {
    if (reportSubmitted) {
      setError("Looks like you already submitted your report...thanks!")
      return
    }
    setSubmitting(true)
    const report = await createReport(currentScores, schoolName)
    const dbPostStatus = await postReportToDb(uid, report)

    // post something to the relevant SF lead
    await fetch(`/.netlify/functions/postReport`, {
      method: "POST",
      body: JSON.stringify({ rollNumber: rollNumber }),
      headers: { "Content-Type": "application/json" },
    })
      // .then(res => res.json())
      // .then(data => console.log(data))
      .catch(console.error)

    if (dbPostStatus === "updated") {
      navigate("/app/confirmation")
    } else {
      setError(
        "Sorry there was a problem uploading your surveys. Please try again"
      )
    }
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
      </section>
      <section className="teachers-box">
          <SurveyQuotaBox
            userType={"Teachers"}
            scores={teachersFilledSurveys}
            quota={teachersQuota}
          />
      </section>
      <section className="pupils-box">
          <SurveyQuotaBox
            userType={"Pupils"}
            scores={pupilsFilledSurveys}
            quota={pupilsQuota}
          />
      </section>
      {leadersFilledSurveys >= leadersQuota &&
      teachersFilledSurveys >= teachersQuota &&
      pupilsFilledSurveys >= pupilsQuota ? (
        submitting ? (
          <button className="final-submit-btn-processing">Processing...</button>
        ) : (
          <button className="final-submit-btn" onClick={handleFinalSubmit}>
            {irish ? "Cuir Isteach" : "Submit"}
          </button>
        )
      ) : null}
      <p className="error-message">{error}</p>
    </section>
  )
}

export default SurveyStats
