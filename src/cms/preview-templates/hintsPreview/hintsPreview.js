import React from "react"
import "../surveyPreview/surveyPreview.css"

const HintsPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS()
  const { dashboardMain, dashboardMessages, surveyProgress, surveyHints } = data

  return (
    <article>
      <h1>Edit Survey Hints</h1>
      <div className="user-title">
        <h2>Survey Dashboard Large Text</h2>
      </div>
      <ul>
        <li>{dashboardMain.zeroDone}</li>
        <li>{dashboardMain.oneDone}</li>
        <li>{dashboardMain.twoDone}</li>
        <li>{dashboardMain.threeDone}</li>
        <li>{dashboardMain.fourDone}</li>
        <li>{dashboardMain.fiveDone}</li>
        <li>{dashboardMain.sixDone}</li>
      </ul>
      <hr />
      <div className="user-title">
        <h2>Survey Dashboard Help Messages</h2>
      </div>
      <ul>
        <li>{dashboardMessages.initial}</li>
        <li>{dashboardMessages.categoryRepeat}</li>
        <li>{dashboardMessages.allCategoriesDone}</li>
      </ul>
      <hr />
      <div className="user-title">
        <h2>Survey Question Progress Messages</h2>
      </div>
      <ul>
        <li>{surveyProgress.first}</li>
        <li>{surveyProgress.penultimate}</li>
        <li>{surveyProgress.last}</li>
        <li>{surveyProgress.middle}</li>
        <li>{surveyProgress.lessThanThree}</li>
      </ul>
      <hr />
      <div className="user-title">
        <h2>Survey Question help Messages</h2>
      </div>

      <ul>
        <li>{surveyHints.general}</li>
        <li>{surveyHints.last}</li>
      </ul>
    </article>
  )
}

export default HintsPreview
