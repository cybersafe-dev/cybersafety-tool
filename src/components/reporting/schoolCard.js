import React from "react"
import ScoreCard from "./scoreCard"
import ReportOptions from "./reportOptions"
import SchoolOptions from "./schoolOptions"
import "../../styling/reporting/schoolCard.css"
import { updateReportSentValue } from "../../firebase"

const SchoolCard = ({ school, refreshData }) => {
  const [details, toggleDetails] = React.useState(false)
  const [scores, toggleScores] = React.useState(false)
  const [reportSentBool, toggleReportSentBool] = React.useState(
    school.reportSent
  )

  React.useEffect(() => {
    updateReportSentValue(school.uid, reportSentBool)
    //eslint-disable-next-line
  }, [reportSentBool])

  const createReadableTimestamp = firebaseTimestamp => {
    const dateInMillis = firebaseTimestamp.seconds * 1000
    const timestamp =
      new Date(dateInMillis).toDateString() +
      " at " +
      new Date(dateInMillis).toLocaleTimeString()
    return timestamp
  }

  const createRenewalDates = firebaseTimestamp => {
    const dateInMillis = firebaseTimestamp.seconds * 1000
    const dayInMillis = 24 * 60 * 60 * 1000
    const yearInMillis = 365 * dayInMillis
    const elevenMonthsMillis = 335 * dayInMillis
    const renewalDate = new Date(dateInMillis + yearInMillis).toDateString()
    const warningDate = new Date(
      dateInMillis + elevenMonthsMillis
    ).toDateString()
    return {
      renewalDate: renewalDate,
      warningDate: warningDate,
    }
  }

  const getCardBgColour = firebaseTimestamp => {
    if (firebaseTimestamp) {
      if (
        new Date(createRenewalDates(firebaseTimestamp).warningDate) <=
        Date.now()
      )
        return "school-card-expiring"
      else if (reportSentBool) return "school-card-complete"
      else if (school.report) return "school-card-with-report"
    } else return "school-card"
  }

  return (
    <section
      className={getCardBgColour(school.reportSubmitted)}
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
        {school.quota ? (
          <p>
            [L: {school.scores.leaders.length}/{school.quota.leadersQuota}][T:{" "}
            {school.scores.teachers.length}/{school.quota.teachersQuota}][P:{" "}
            {school.scores.pupils.length}/{school.quota.pupilsQuota}]
          </p>
        ) : null}
      </div>
      {school.report ? (
        <p style={{ margin: "1rem 0 0 0" }}>
          {school.report.prospectiveMark} School since{" "}
          {createReadableTimestamp(school.reportSubmitted)}
        </p>
      ) : null}
      <div style={{ display: details ? "block" : "none" }}>
        <div className="school-info">
          <p>County {school.county}</p>
          <p>Roll Number: {school.rollNumber ? school.rollNumber : "N/A"}</p>
          <p>
            Contact name: {school.firstName} {school.lastName}
          </p>
          <p>Contact email: {school.email}</p>
          <p>Number of Pupils: {school.pupilCount}</p>
          <p>Account created: {createReadableTimestamp(school.createdAt)}</p>
          <p>Tool progress last refreshed: {createReadableTimestamp(school.updatedAt)}</p>
        </div>
        <ReportOptions
          report={school.report}
          reportSubmitted={school.reportSubmitted}
          reportSentInitialValue={school.reportSent}
          reportSentBool={reportSentBool}
          toggleReportSentBool={toggleReportSentBool}
          quota={school.quota}
        />
        {school.report ? (
          <p>
            Renewal date:{" "}
            {createRenewalDates(school.reportSubmitted).renewalDate}
          </p>
        ) : null}
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
        <SchoolOptions school={school} refreshData={refreshData} />
      </div>
    </section>
  )
}

export default SchoolCard
