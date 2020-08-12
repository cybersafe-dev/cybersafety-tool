import React from "react"
import "../styling/dashboard.css"

const SurveyDashMessages = ({
  message,
  setMessage,
  completedSections,
  allDashMessages,
}) => {
  const [dashTitle, setDashTitle] = React.useState("Your time starts now!")

  React.useEffect(() => {
    switch (completedSections.length - 1) {
      case 0:
        setDashTitle(() => allDashMessages.dashboardMain.zeroDone)
        break
      case 1:
        setDashTitle(() => allDashMessages.dashboardMain.oneDone)
        break
      case 2:
        setDashTitle(() => allDashMessages.dashboardMain.twoDone)
        break
      case 3:
        setDashTitle(() => allDashMessages.dashboardMain.threeDone)
        break
      case 4:
        setDashTitle(() => allDashMessages.dashboardMain.fourDone)
        break
      case 5:
        setDashTitle(() => allDashMessages.dashboardMain.fiveDone)
        break
      case 6:
        setDashTitle(() => allDashMessages.dashboardMain.sixDone)
        setMessage(() => allDashMessages.dashboardMessages.allCategoriesDone)
        break
      default:
        setMessage(() => allDashMessages.dashboardMessages.initial)
    }
    // eslint-disable-next-line
  }, [completedSections])

  return (
    <section>
      <h1 className="title">{dashTitle}</h1>
      <p className="explain">{message}</p>
    </section>
  )
}

export default SurveyDashMessages
