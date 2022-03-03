import React from "react"
import "../../styling/reporting/reportOptions.css"
import InlineReportTemplate from "./inlineReportTemplate"
import { PDFDownloadLink } from "@react-pdf/renderer"
import PdfReportAwareSmart from "../../templates/pdfReportAwareAndSmart"
import PdfReportChampion from "../../templates/pdfReportChampion"

const ReportOptions = ({
  report,
  reportSubmitted,
  reportSentBool,
  toggleReportSentBool,
  reportSentInitialValue,
  quota,
}) => {
  const [visibleReport, toggleReport] = React.useState(false)
  const [documentsGenerated, setDocumentsGenerated] = React.useState(false)
  const generatePdfs = () => {
    setDocumentsGenerated(() => !documentsGenerated)
  }

  return (
    <div className="report-bar">
      {report ? (
        <>
          <div className="show-hide-bar">
            <p>
              Report: <span className="tick">✓</span>
            </p>
            {!documentsGenerated ? (
              <button className="pdf-dl-btn" onClick={generatePdfs}>
                Generate Report
              </button>
            ) : report.prospectiveMark === "CyberChampion" ? (
              <div className="show-hide-bar">
                <PDFDownloadLink
                  className="pdf-dl-btn"
                  document={
                    <PdfReportChampion
                      report={report}
                      reportSubmitted={reportSubmitted}
                      quota={quota}
                    />
                  }
                  fileName={`CyberSafe Tool for Schools Report ${report.reportFor} CyberChampion.pdf`}
                >
                  {({ blob, url, loading, error }) =>
                    loading ? "Loading document..." : "CyberChampion Report"
                  }
                </PDFDownloadLink>
              </div>
            ) : (
              <div className="show-hide-bar">
                <PDFDownloadLink
                  className="pdf-dl-btn"
                  document={
                    <PdfReportAwareSmart
                      report={report}
                      reportSubmitted={reportSubmitted}
                      quota={quota}
                    />
                  }
                  fileName={`CyberSafe Tool for Schools Report ${report.reportFor} ${report.prospectiveMark}.pdf`}
                >
                  {({ blob, url, loading, error }) =>
                    loading
                      ? "Loading document..."
                      : `${report.prospectiveMark} Report`
                  }
                </PDFDownloadLink>
              </div>
            )}

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
