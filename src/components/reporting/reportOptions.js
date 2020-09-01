import React from "react"
import "../../styling/reporting/reportOptions.css"

const ReportOptions = ({ report }) => {
  return (
    <div className="report-bar">
      {report ? (
        <p>
          Report: <span className="tick">✓</span>
        </p>
      ) : (
        <p>
          Report: <span className="orange">No report yet</span>
        </p>
      )}
    </div>
  )
}

export default ReportOptions
