import React from "react"
import ScoreCard from "./scoreCard"
import ReportOptions from "./reportOptions"
import "../../styling/reporting/schoolCard.css"
import { updateReportSentValue, postReportToDb } from "../../firebase"
import { createReport } from "../../templates/reportTemplate"

const SchoolCard = ({ school }) => {
  const [details, toggleDetails] = React.useState(false)
  const [scores, toggleScores] = React.useState(false)
  const [reportSentBool, toggleReportSentBool] = React.useState(
    school.reportSent
  )

  React.useEffect(() => {
    updateReportSentValue(school.uid, reportSentBool)
    //eslint-disable-next-line
  }, [reportSentBool])

  const reportTimestamp = () => {
    if (school.reportSubmitted) {
      const dateInMillis = school.reportSubmitted.seconds * 1000
      const timestamp =
        new Date(dateInMillis).toDateString() +
        " at " +
        new Date(dateInMillis).toLocaleTimeString()
      return timestamp
    } else return
  }

  const manualReportSubmit = async () => {
    let replaceReport = true;
    if (school.reportSubmitted) {
      replaceReport = window.confirm(
        "This will replace the existing report. Continue?"
      )
    }
    let confirmGenerate = window.confirm("Are you sure?")
    if (!replaceReport || !confirmGenerate) return
    else {
      const report = await createReport(school.scores, school.schoolName)
      const dbPostStatus = await postReportToDb(school.uid, report)

      // post something to the relevant SF lead
      await fetch(`/.netlify/functions/postReport`, {
        method: "POST",
        body: JSON.stringify({ rollNumber: school.rollNumber }),
        headers: { "Content-Type": "application/json" },
      })
        // .then(res => res.json())
        // .then(data => console.log(data))
        .catch(console.error)

      if (dbPostStatus === "updated") {
        alert("Report Submitted - You may need to refresh your page to update")
      } else {
        alert("There was a problem creating this report. Please try again")   
      }
    }
  }

  return (
    <section
      className={
        reportSentBool
          ? "school-card-complete"
          : school.report
          ? "school-card-with-report"
          : "school-card"
      }
      key={school.schoolName}
    >
      <div className="bar-line">
        <h2 className="bar-school-title">{school.schoolName}</h2>
        {details ? (
          <button
            className="bar-toggle-btn"
            onClick={() => toggleDetails(!details)}
          >
            hide details
          </button>
        ) : (
          <button
            className="bar-toggle-btn"
            onClick={() => toggleDetails(!details)}
          >
            show details
          </button>
        )}
      </div>
      {school.report ? (
        <p style={{ margin: "1rem 0 0 0" }}>
          {school.report.prospectiveMark} School since {reportTimestamp()}
        </p>
      ) : null}
      <div style={{ display: details ? "block" : "none" }}>
        <div className="school-info">
          <p>Roll Number: {school.rollNumber ? school.rollNumber : "N/A"}</p>
          <p>
            Contact name: {school.firstName} {school.lastName}
          </p>
          <p>Contact email: {school.email}</p>
          <p>Number of Pupils: {school.pupilCount}</p>
        </div>
        <ReportOptions
          report={school.report}
          reportSubmitted={school.reportSubmitted}
          reportSentInitialValue={school.reportSent}
          reportSentBool={reportSentBool}
          toggleReportSentBool={toggleReportSentBool}
          quota={school.quota}
        />
        <div className="bar-line">
          <p>Individual Survey Scores:</p>
          {scores ? (
            <button
              className="bar-toggle-btn"
              onClick={() => toggleScores(!scores)}
            >
              hide scores
            </button>
          ) : (
            <button
              className="bar-toggle-btn"
              onClick={() => toggleScores(!scores)}
            >
              show scores
            </button>
          )}
        </div>
        <div style={{ display: scores ? "block" : "none" }}>
          <p className="score-type">
            School Leaders{" "}
            {school.quota ? (
              <span>
                ({school.scores.leaders.length}/{school.quota.leadersQuota})
              </span>
            ) : null}
          </p>
          <div className="scorecard-box">
            {school.scores && school.scores.leaders.length > 0 ? (
              school.scores.leaders.map((score, i) => (
                <ScoreCard key={i} score={score} />
              ))
            ) : (
              <p className="orange">No surveys submitted yet.</p>
            )}
          </div>
          <p className="score-type">
            Teachers{" "}
            {school.quota ? (
              <span>
                ({school.scores.teachers.length}/{school.quota.teachersQuota})
              </span>
            ) : null}
          </p>
          <div className="scorecard-box">
            {school.scores && school.scores.teachers.length > 0 ? (
              school.scores.teachers.map((score, i) => (
                <ScoreCard key={i} score={score} />
              ))
            ) : (
              <p className="orange">No surveys submitted yet.</p>
            )}
          </div>
          <p className="score-type">
            Pupils{" "}
            {school.quota ? (
              <span>
                ({school.scores.pupils.length}/{school.quota.pupilsQuota})
              </span>
            ) : null}
          </p>
          <div className="scorecard-box">
            {school.scores && school.scores.pupils.length > 0 ? (
              school.scores.pupils.map((score, i) => (
                <ScoreCard key={i} score={score} />
              ))
            ) : (
              <p className="orange">No surveys submitted yet.</p>
            )}
          </div>
        </div>
        <button onClick={manualReportSubmit}>Generate report</button>
      </div>
    </section>
  )
}

export default SchoolCard
