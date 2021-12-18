import React from "react"
import "../../styling/survey/dashboard.css"
import { graphql, useStaticQuery } from "gatsby"
import Timer from "../../components/dashboard/timer"
import { LanguageStore } from "../../providers/languageProvider"

const SurveyDashMessages = ({
  message,
  setMessage,
  completedSections,
  error,
}) => {
  const [dashTitle, setDashTitle] = React.useState("")
  const [irish] = React.useContext(LanguageStore)

  const allDashMessages = useStaticQuery(
    graphql`
      query {
        allFile(
          filter: {
            sourceInstanceName: { eq: "content" }
            name: { in: ["hints", "irishhints"] }
          }
        ) {
          edges {
            node {
              childMarkdownRemark {
                frontmatter {
                  dashboardMain {
                    fiveDone
                    fourDone
                    oneDone
                    sixDone
                    twoDone
                    threeDone
                    zeroDone
                  }
                  dashboardMessages {
                    allCategoriesDone
                    categoryRepeat
                    initial
                  }
                  dashboardMainIrish {
                    fiveDone
                    fourDone
                    oneDone
                    sixDone
                    threeDone
                    twoDone
                    zeroDone
                  }
                  dashboardMessagesIrish {
                    allCategoriesDone
                    categoryRepeat
                    initial
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  React.useEffect(() => {
    let dashboardMain, dashboardMessages
    if (!irish) {
      dashboardMain =
        allDashMessages.allFile.edges[1].node.childMarkdownRemark.frontmatter
          .dashboardMain
          dashboardMessages =
        allDashMessages.allFile.edges[1].node.childMarkdownRemark.frontmatter
          .dashboardMessages
    } else {
      dashboardMain =
        allDashMessages.allFile.edges[0].node.childMarkdownRemark.frontmatter
          .dashboardMainIrish
          dashboardMessages =
        allDashMessages.allFile.edges[0].node.childMarkdownRemark.frontmatter
          .dashboardMessagesIrish
    }
    switch (completedSections.length - 1) {
      case 1:
        setDashTitle(() => dashboardMain.oneDone)
        setMessage(() => dashboardMessages.initial)
        break
      case 2:
        setDashTitle(() => dashboardMain.twoDone)
        setMessage(() => dashboardMessages.initial)
        break
      case 3:
        setDashTitle(() => dashboardMain.threeDone)
        setMessage(() => dashboardMessages.initial)
        break
      case 4:
        setDashTitle(() => dashboardMain.fourDone)
        setMessage(() => dashboardMessages.initial)
        break
      case 5:
        setDashTitle(() => dashboardMain.fiveDone)
        setMessage(() => dashboardMessages.initial)
        break
      case 6:
        setDashTitle(() => dashboardMain.sixDone)
        setMessage(() => dashboardMessages.allCategoriesDone)
        break
      default:
        setDashTitle(() => dashboardMain.zeroDone)
        setMessage(() => dashboardMessages.initial)
    }
    // eslint-disable-next-line
  }, [completedSections, irish])

  return (
    <>
      <div className="top-line">
        <h1 className="title">{dashTitle}</h1>
        <Timer className="timer-space" />
      </div>
      <p className="explain">{message}</p>
      <p className="dash-error">{error}</p>
    </>
  )
}

export default SurveyDashMessages
