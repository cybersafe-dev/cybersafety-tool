import React from "react"
import "../../styling/reporting/schoolOptions.css"
import {
  postReportToDb,
  deleteUserAccount,
  getUserDocument,
  archiveCurrent,
  refreshSchool,
} from "../../firebase"
import { createReport } from "../../templates/reportTemplate"

const SchoolOptions = ({ school, refreshData }) => {
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
      const { scores } = await getUserDocument(school.uid)
      const report = await createReport(scores, school.schoolName)
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
        alert("Report Submitted.")
        refreshData()
      } else {
        alert("There was a problem creating this report. Please try again.")
      }
    }
  }

  const handleDeleteAccount = async () => {
    let confirmDelete = window.confirm(
      "Are you sure you want to delete this user? This action cannot be reversed."
    )
    if (!confirmDelete) return
    else {
      const deleteStatus = await deleteUserAccount(school.uid)
      if (deleteStatus === "uid error") {
        alert("Error: No account ID provided")
      } else if (deleteStatus === "deletion error") {
        alert(
          "Sorry, there was a problem deleting this account, please try again."
        )
      } else if (deleteStatus === "deleted") {
        alert("Account successfully deleted.")
        refreshData()
      } else return
    }
  }

  const archiveAndRefreshSchoolProgress = async () => {
    let confirmRefreshSchool = true
    confirmRefreshSchool = window.confirm(
      "This will archive this school's current report and refresh their tool progress. Continue?"
    )
    if (!confirmRefreshSchool) return
    else {
      const { scores, report, reportSubmitted } = await getUserDocument(
        school.uid
      )
      const archiveData = {
        reportSubmitted: reportSubmitted,
        report: report,
        scores: scores,
        archivedAt: Date.now(),
      }

      await archiveCurrent(school.uid, archiveData)
        .then(() => refreshSchool(school.uid))
        .then(() => {
          alert("Tool progress successfully refreshed and old data archived.")
          refreshData()
        })
        .catch(error => {
          console.error(error)
          alert("Sorry, there was an error: ", error)
        })
    }
  }

  return (
    <fieldset className="danger-area">
      <legend>Danger Area</legend>
      <div className="button-bar">
        <button className="red-warning-btn" onClick={manualReportSubmit}>
          Generate report
        </button>
        <button className="red-warning-btn" onClick={handleDeleteAccount}>
          Delete School
        </button>
        <button
          className="red-warning-btn"
          onClick={archiveAndRefreshSchoolProgress}
        >
          Refresh School
        </button>
      </div>
    </fieldset>
  )
}

export default SchoolOptions
