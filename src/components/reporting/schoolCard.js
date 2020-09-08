import React from "react"
import ScoreCard from "./scoreCard"
import ReportOptions from "./reportOptions"
import "../../styling/reporting/schoolCard.css"

const SchoolCard = ({ school }) => {
  const [scores, showScores] = React.useState(false)
  return (
    <section className="school-card" key={school.schoolName}>
      <h2>{school.schoolName}</h2>
      <div className="school-info">
        <p>Contact email: {school.email}</p>
        <p>Number of Pupils: {school.pupilCount}</p>
      </div>
      <ReportOptions
        report={school.report}
        reportSubmitted={school.reportSubmitted}
      />
      <div className="scores-line">
        <p>Individual Survey Scores:</p>
        {scores ? (
          <p className="scores-toggle-btn" onClick={() => showScores(!scores)}>
            hide
          </p>
        ) : (
          <p className="scores-toggle-btn" onClick={() => showScores(!scores)}>
            show
          </p>
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
    </section>
  )
}

export default SchoolCard