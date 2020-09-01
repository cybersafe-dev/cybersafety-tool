import React from "react"
import ScoreCard from "./scoreCard"
import "../../styling/reporting/schoolCard.css"

const SchoolCard = ({ school }) => (
  <section className="school-card" key={school.schoolName}>
    <h2>{school.schoolName}</h2>
    <p>Contact email: {school.email}</p>
    <p>Number of Pupils: {school.pupilCount}</p>
    {school.report ? <button>show report</button> : <p>No report yet</p>}
    <p className="score-type">School Leaders</p>
    {school.scores && school.scores.leaders.length > 0 ? (
      school.scores.leaders.map((score, i) => (
        <ScoreCard key={i} score={score} />
      ))
    ) : (
      <p>No scores yet</p>
    )}
    <p className="score-type">Teachers</p>
    {school.scores && school.scores.teachers.length > 0 ? (
      school.scores.teachers.map((score, i) => (
        <ScoreCard key={i} score={score} />
      ))
    ) : (
      <p>No scores yet</p>
    )}
    <p className="score-type">Pupils</p>
    {school.scores && school.scores.pupils.length > 0 ? (
      school.scores.pupils.map((score, i) => (
        <ScoreCard key={i} score={score} />
      ))
    ) : (
      <p>No scores yet</p>
    )}
  </section>
)

export default SchoolCard
