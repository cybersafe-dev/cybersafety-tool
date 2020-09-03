import React from "react"
import "../../styling/reporting/reportOptions.css"
import InlineReportTemplate from "./inlineReportTemplate"
import { PDFDownloadLink } from "@react-pdf/renderer"
import PdfReportTemplate from "../../templates/pdfReportTemplate"

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
            <PDFDownloadLink
              className="pdf-dl-btn"
              document={<PdfReportTemplate />}
              fileName={`Report for ${report.reportFor}.pdf`}
            >
              {({ blob, url, loading, error }) =>
                loading ? "Loading document..." : "Download PDF"
              }
            </PDFDownloadLink>
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
