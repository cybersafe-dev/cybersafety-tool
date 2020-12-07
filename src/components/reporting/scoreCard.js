import React from "react"
import "../../styling/reporting/scoreCard.css"
import { applyStatus } from "../../templates/reportTemplate"

const ScoreCard = ({ score }) => {
  const submissionTimestamp =
    new Date(score.timestamp).toDateString() +
    " at " +
    new Date(score.timestamp).toLocaleTimeString()

  return (
    <section className="score-card">
      <ul className="scores-list">
        <li className="category">
          Digital Knowledge: {applyStatus(score.digitalknowledge)}
        </li>
        <li className="category">Privacy: {applyStatus(score.privacy)}</li>
        <li className="category">
          Online Life: {applyStatus(score.onlinelife)}
        </li>
        <li className="category">
          Communication: {applyStatus(score.communication)}
        </li>
        <li className="category">
          Critical Thinking: {applyStatus(score.criticalthinking)}
        </li>
        <li className="category">
          Responsible Use: {applyStatus(score.responsibleuse)}
        </li>
      </ul>
      {score.timestamp ? (
        <p className="timestamp">
          Submitted: <span className="datetime">{submissionTimestamp}</span>
        </p>
      ) : (
        <p className="timestamp">No submission date recorded.</p>
      )}
    </section>
  )
}

export default ScoreCard
