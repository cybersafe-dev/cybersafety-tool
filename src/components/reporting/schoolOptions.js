import React from "react"
import "../../styling/reporting/schoolOptions.css"
import { postReportToDb } from "../../firebase"
import { createReport } from "../../templates/reportTemplate"

const SchoolOptions = ({ school }) => {
  const manualReportSubmit = async () => {
    let replaceReport = true
    let confirmGenerate = window.confirm(
      "Are you sure you want to generate this report?"
    )
    if (school.reportSubmitted && confirmGenerate) {
      replaceReport = window.confirm(
        "This will replace the existing report. Continue?"
      )
    }
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
    <div className="button-bar">
      <button className="red-warning-btn" onClick={manualReportSubmit}>
        Generate report
      </button>
      <button className="red-warning-btn">
        Delete School
      </button>
    </div>
  )
}

export default SchoolOptions
