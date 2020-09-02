import React from "react"
import "../../styling/reporting/inlineReportTemplate.css"

const InlineReportTemplate = ({ report, reportSubmitted }) => {
  const dateInMillis = reportSubmitted.seconds * 1000
  const reportTimestamp =
    new Date(dateInMillis).toDateString() +
    " at " +
    new Date(dateInMillis).toLocaleTimeString()
  return (
    <section className="report-template">
      <h2>{report.reportFor}</h2>
      <div className="scores-rundown">
        <div className="leaders">
          <p>School Leaders</p>
          <ul>
            <li>Digital Knowledge: {report.leaders.digitalknowledge}</li>
            <li>Privacy: {report.leaders.privacy}</li>
            <li>Sharing: {report.leaders.sharing}</li>
            <li>Communication: {report.leaders.communication}</li>
            <li>Critical Thinking: {report.leaders.criticalthinking}</li>
            <li>Responsible Use: {report.leaders.responsibleuse}</li>
          </ul>
        </div>
        <div className="teachers">
          <p>Teachers</p>
          <ul>
            <li>Digital Knowledge: {report.teachers.digitalknowledge}</li>
            <li>Privacy: {report.teachers.privacy}</li>
            <li>Sharing: {report.teachers.sharing}</li>
            <li>Communication: {report.teachers.communication}</li>
            <li>Critical Thinking: {report.teachers.criticalthinking}</li>
            <li>Responsible Use: {report.teachers.responsibleuse}</li>
          </ul>
        </div>
        <div className="pupils">
          <p>Pupils</p>
          <ul>
            <li>Digital Knowledge: {report.pupils.digitalknowledge}</li>
            <li>Privacy: {report.pupils.privacy}</li>
            <li>Sharing: {report.pupils.sharing}</li>
            <li>Communication: {report.pupils.communication}</li>
            <li>Critical Thinking: {report.pupils.criticalthinking}</li>
            <li>Responsible Use: {report.pupils.responsibleuse}</li>
          </ul>
        </div>
      </div>
      {reportSubmitted ? <p>Report submitted: {reportTimestamp}</p> : null}
      <p>Recommended mark based on overall average: {report.prospectiveMark}</p>
    </section>
  )
}

export default InlineReportTemplate
