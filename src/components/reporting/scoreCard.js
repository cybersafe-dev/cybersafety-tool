import React from "react"
import "../../styling/reporting/scoreCard.css"

const ScoreCard = ({ score }) => (
  <section className="score-card">
    <ul className="scores-list">
      <li>Digital Knowledge: {score.digitalknowledge}</li>
      <li>Privacy: {score.privacy}</li>
      <li>Sharing: {score.sharing}</li>
      <li>Communication: {score.communication}</li>
      <li>Critical Thinking: {score.criticalthinking}</li>
      <li>Responsible Use: {score.responsibleuse}</li>
    </ul>
{score.timestamp ? <p>{score.timestamp}</p> : null}
  </section>
)

export default ScoreCard
