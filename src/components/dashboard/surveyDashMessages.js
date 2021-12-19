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
        english: allFile(
          filter: {
            sourceInstanceName: { eq: "content" }
            name: { eq: "hints" }
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
                }
              }
            }
          }
        }
        irish: allFile(
          filter: {
            sourceInstanceName: { eq: "content" }
            name: { eq: "irishhints" }
          }
        ) {
          edges {
            node {
              childMarkdownRemark {
                frontmatter {
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
        allDashMessages.english.edges[0].node.childMarkdownRemark.frontmatter
          .dashboardMain
      dashboardMessages =
        allDashMessages.english.edges[0].node.childMarkdownRemark.frontmatter
          .dashboardMessages
    } else {
      dashboardMain =
        allDashMessages.irish.edges[0].node.childMarkdownRemark.frontmatter
          .dashboardMainIrish
      dashboardMessages =
        allDashMessages.irish.edges[0].node.childMarkdownRemark.frontmatter
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
