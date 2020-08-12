import React from "react"
import "../styling/dashboard.css"
import { graphql } from "gatsby"

const SurveyDashMessages = ({ message, setMessage, completedSections, data }) => {
    console.log("data", data)
  const allDashMessages =
    data.allFile.edges[0].node.childMarkdownRemark.frontmatter

    const [dashTitle, setDashTitle] = React.useState(allDashMessages.dashboardMain.zeroDone)

    switch(completedSections.length) {
        case 0:
            setMessage(allDashMessages.dashboardMessages.initial)
            break
        case 1:
            setDashTitle(allDashMessages.dashboardMain.oneDone)
            setMessage(allDashMessages.dashboardMessages.initial)
            break
        case 2:
            setDashTitle(allDashMessages.dashboardMain.twoDone)
            setMessage(allDashMessages.dashboardMessages.initial)
            break
        case 3:
            setDashTitle(allDashMessages.dashboardMain.threeDone)
            setMessage(allDashMessages.dashboardMessages.initial)
            break
        case 4:
            setDashTitle(allDashMessages.dashboardMain.fourDone)
            setMessage(allDashMessages.dashboardMessages.initial)
            break
        case 5:
            setDashTitle(allDashMessages.dashboardMain.fiveDone)
            setMessage(allDashMessages.dashboardMessages.initial)
            break
        case 6:
            setDashTitle(allDashMessages.dashboardMain.sixDone)
            setMessage(allDashMessages.dashboardMessages.allCategoriesDone)
            break
        default:
            setMessage(allDashMessages.dashboardMessages.initial) 
    }

  return (
    <section>
      <h1 className="title">{dashTitle}</h1>
      <p className="explain">{message}</p>
    </section>
  )
}

export default SurveyDashMessages

export const query = graphql`
  query {
    allFile(
      filter: { sourceInstanceName: { eq: "content" }, name: { eq: "hints" } }
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
                threeDone
                twoDone
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
  }
`
