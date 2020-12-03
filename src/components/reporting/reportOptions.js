import React from "react"
import "../../styling/reporting/reportOptions.css"
import InlineReportTemplate from "./inlineReportTemplate"
import { PDFDownloadLink } from "@react-pdf/renderer"
import PdfReportSilver from "../../templates/pdfReportSilver"
import PdfReportGold from "../../templates/pdfReportGold"
import PdfReportPlatinum from "../../templates/pdfReportPlatinum"

const ReportOptions = ({
  report,
  reportSubmitted,
  reportSentBool,
  toggleReportSentBool,
  reportSentInitialValue,
  quota
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
            <PDFDownloadLink
              className="pdf-dl-btn-silver"
              document={
                <PdfReportSilver
                  report={report}
                  reportSubmitted={reportSubmitted}
                  quota={quota}
                />
              }
              fileName={`CyberSafe Tool for Schools Report ${report.reportFor} Silver.pdf`}
            >
              {({ blob, url, loading, error }) => 
                loading ? "Loading document..." : "Silver Report"
              }
            </PDFDownloadLink>
            <PDFDownloadLink
              className="pdf-dl-btn-gold"
              document={
                <PdfReportGold
                  report={report}
                  reportSubmitted={reportSubmitted}
                  quota={quota}
                />
              }
              fileName={`CyberSafe Tool for Schools Report ${report.reportFor} Gold.pdf`}
            >
              {({ blob, url, loading, error }) => 
                loading ? "Loading document..." : "Gold Report"
              }
            </PDFDownloadLink>
            <PDFDownloadLink
              className="pdf-dl-btn-platinum"
              document={
                <PdfReportPlatinum
                  report={report}
                  reportSubmitted={reportSubmitted}
                  quota={quota}
                />
              }
              fileName={`CyberSafe Tool for Schools Report ${report.reportFor} Platinum.pdf`}
            >
              {({ blob, url, loading, error }) => 
                loading ? "Loading document..." : "Platinum Report"
              }
            </PDFDownloadLink>
            
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
