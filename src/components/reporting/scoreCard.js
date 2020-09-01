import React from "react"
import "../../styling/reporting/scoreCard.css"

const ScoreCard = ({ score }) => (
  <section className="score-card">
    <ul className="scores-list">
      <li className="category">Digital Knowledge: {score.digitalknowledge}</li>
      <li className="category">Privacy: {score.privacy}</li>
      <li className="category">Sharing: {score.sharing}</li>
      <li className="category">Communication: {score.communication}</li>
      <li className="category">Critical Thinking: {score.criticalthinking}</li>
      <li className="category">Responsible Use: {score.responsibleuse}</li>
    </ul>
    {score.timestamp ? (
      <p className="timestamp">
        Submitted: <span className="datetime">{score.timestamp}</span>
      </p>
    ) : (
      <p className="timestamp">No submission date recorded.</p>
    )}
  </section>
)

export default ScoreCard
