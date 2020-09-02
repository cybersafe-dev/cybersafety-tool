import React from "react"
import "../../styling/reporting/reportOptions.css"
import InlineReportTemplate from "./inlineReportTemplate"

const ReportOptions = ({ report, reportSubmitted }) => {
  const [visibleReport, toggleReport] = React.useState(false)

  return (
    <div className="report-bar">
      {report ? (
        <>
          <div className="show-hide-bar">
            <p>
              Report: <span className="tick">✓</span>
            </p>
            {visibleReport ? (
              <p
                className="report-toggle-btn"
                onClick={() => toggleReport(!visibleReport)}
              >
                hide report
              </p>
            ) : (
              <p
                className="report-toggle-btn"
                onClick={() => toggleReport(!visibleReport)}
              >
                show report
              </p>
            )}
          </div>
          <div style={{ display: visibleReport ? "block" : "none" }}>
            <InlineReportTemplate report={report} reportSubmitted={reportSubmitted} />
          </div>
        </>
      ) : (
        <p>
          Report: <span className="orange">No report yet</span>
        </p>
      )}
    </div>
  )
}

export default ReportOptions
