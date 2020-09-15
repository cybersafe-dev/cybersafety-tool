import React from "react"
import "../../styling/reporting/reportOptions.css"
import InlineReportTemplate from "./inlineReportTemplate"
import { PDFDownloadLink } from "@react-pdf/renderer"
import PdfReportTemplate from "../../templates/pdfReportTemplate"

const ReportOptions = ({
  report,
  reportSubmitted,
  reportSentBool,
  toggleReportSentBool,
  reportSentInitialValue,
}) => {
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
              <button
                className="report-toggle-btn"
                onClick={() => toggleReport(!visibleReport)}
              >
                hide report
              </button>
            ) : (
              <button
                className="report-toggle-btn"
                onClick={() => toggleReport(!visibleReport)}
              >
                show report
              </button>
            )}
            <PDFDownloadLink
              className="pdf-dl-btn"
              document={
                <PdfReportTemplate
                  report={report}
                  reportSubmitted={reportSubmitted}
                />
              }
              fileName={`Report for ${report.reportFor}.pdf`}
            >
              {({ blob, url, loading, error }) => 
                loading ? "Loading document..." : "Download PDF"
              }
            </PDFDownloadLink>
            <label htmlFor="reportSent" className="report-toggle-btn">
              <input
                className="checkbox"
                type="checkbox"
                id="reportSent"
                name="reportSent"
                value={reportSentBool}
                onClick={() => toggleReportSentBool(!reportSentBool)}
                defaultChecked={reportSentInitialValue}
              />
              report sent
            </label>
          </div>
          <div style={{ display: visibleReport ? "block" : "none" }}>
            <InlineReportTemplate
              report={report}
              reportSubmitted={reportSubmitted}
            />
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
