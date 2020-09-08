import React from "react"
import { Link, graphql } from "gatsby"
import { ResponseStore } from "../../providers/responseProvider"

import Layout from "../../components/layout/layout"
import DataErrorPage from "../../components/dataerror/dataerror"
import SurveyDashMessages from "../../components/dashboard/surveyDashMessages"

import SurveyProgress from "../../components/dashboard/surveyProgress"

import BgImg from "../../images/bg-gradient.svg"
import Graphic from "../../images/dash.svg"

import Digital from "../../images/Digital-open.svg"
import DigitalDone from "../../images/Digital-done.svg"
import Privacy from "../../images/Privacy-open.svg"
import PrivacyDone from "../../images/Privacy-done.svg"
import Sharing from "../../images/Sharing-open.svg"
import SharingDone from "../../images/Sharing-done.svg"
import Commun from "../../images/Comm-open.svg"
import CommDone from "../../images/Comm-done.svg"
import Critical from "../../images/Critical-open.svg"
import CriticalDone from "../../images/Critical-done.svg"
import Respons from "../../images/Respons-open.svg"
import ResponsDone from "../../images/Respons-done.svg"

import "../../styling/survey/dashboard.css"

const Dashboard = ({ data }) => {
  const [store] = React.useContext(ResponseStore)

  const surveyAllData =
    data.allFile.edges[0].node.childMarkdownRemark.frontmatter

  const [message, setMessage] = React.useState(
    "Click on a key to answer the questions for that category. See if you can complete all the categories before the timer gets to twenty minutes."
  )

  const [error, setError] = React.useState("")

  if (!store || !store.userType || !store.schoolId) {
    return <DataErrorPage />
  }

  const user = store.userType
  const userSpecificData = surveyAllData[user]

  let completedSections = []
  let sectionKeys = store.responses.map(response => Object.keys(response))
  sectionKeys.map(key => completedSections.push(key[0]))

  const repeatCategoryAlert = () => {
    setError(
      "You can only complete a category once. Please pick another category."
    )
  }

  // Debugging logs
  // console.log(user, userSpecificData)
  // console.log("messages", allDashMessages)
  // console.log({ store })

  return (
    <Layout>
      <section className="dashboard-container">
        <img src={BgImg} alt="background design" className="bg-img3" />
        <img src={BgImg} alt="background design" className="bg-img4" />
        <div className="headline">
          <SurveyDashMessages
            error={error}
            completedSections={completedSections}
            message={message}
            setMessage={setMessage}
          />
        </div>
        <div className="body-content">
          <SurveyProgress
            completedSections={completedSections}
            setError={setError}
          />
          <div className="categories">
            <div className="col">
              {completedSections.includes("digitalknowledge") ? (
                <button
                  className="done-icon-button"
                  onClick={repeatCategoryAlert}
                >
                  <img
                    src={DigitalDone}
                    alt="Digital Knowledge complete"
                    className="cat-image"
                  />
                </button>
              ) : (
                <Link
                  to="/survey/category/"
                  state={{
                    survey: userSpecificData.digitalknowledge,
                    category: "Digital Knowledge",
                  }}
                >
                  <img src={Digital} alt="" className="cat-image" />
                </Link>
              )}{" "}
              {completedSections.includes("privacy") ? (
                <button
                  className="done-icon-button"
                  onClick={repeatCategoryAlert}
                >
                  <img
                    src={PrivacyDone}
                    alt="Privacy complete"
                    className="cat-image"
                  />
                </button>
              ) : (
                <Link
                  to="/survey/category/"
                  state={{
                    survey: userSpecificData.privacy,
                    category: "Privacy",
                  }}
                >
                  <img src={Privacy} alt="" className="cat-image" />
                </Link>
              )}{" "}
              {completedSections.includes("sharing") ? (
                <button
                  className="done-icon-button"
                  onClick={repeatCategoryAlert}
                >
                  <img
                    src={SharingDone}
                    alt="Sharing complete"
                    className="cat-image"
                  />
                </button>
              ) : (
                <Link
                  to="/survey/category/"
                  state={{
                    survey: userSpecificData.sharing,
                    category: "Sharing",
                  }}
                >
                  <img src={Sharing} alt="" className="cat-image" />
                </Link>
              )}{" "}
            </div>
            <div className="col">
              {completedSections.includes("communication") ? (
                <button
                  className="done-icon-button"
                  onClick={repeatCategoryAlert}
                >
                  <img
                    src={CommDone}
                    alt="Communication complete"
                    className="cat-image"
                  />
                </button>
              ) : (
                <Link
                  to="/survey/category/"
                  state={{
                    survey: userSpecificData.communication,
                    category: "Communication",
                  }}
                >
                  <img src={Commun} alt="" className="cat-image" />
                </Link>
              )}{" "}
              {completedSections.includes("criticalthinking") ? (
                <button
                  className="done-icon-button"
                  onClick={repeatCategoryAlert}
                >
                  <img
                    src={CriticalDone}
                    alt="Critical Thinking complete"
                    className="cat-image"
                  />
                </button>
              ) : (
                <Link
                  to="/survey/category/"
                  state={{
                    survey: userSpecificData.criticalthinking,
                    category: "Critical Thinking",
                  }}
                >
                  <img src={Critical} alt="" className="cat-image" />
                </Link>
              )}{" "}
              {completedSections.includes("responsibleuse") ? (
                <button
                  className="done-icon-button"
                  onClick={repeatCategoryAlert}
                >
                  <img
                    src={ResponsDone}
                    alt="Responsible Use complete"
                    className="cat-image"
                  />
                </button>
              ) : (
                <Link
                  to="/survey/category/"
                  state={{
                    survey: userSpecificData.responsibleuse,
                    category: "Responsible Use",
                  }}
                >
                  <img src={Respons} alt="" className="cat-image" />
                </Link>
              )}{" "}
            </div>
          </div>
        </div>
      </section>
      <img src={Graphic} alt="background design" className="graphic" />
    </Layout>
  )
}
export default Dashboard

export const query = graphql`
  {
    allFile(
      filter: { sourceInstanceName: { eq: "content" }, name: { eq: "survey" } }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              leaders {
                digitalknowledge {
                  statement
                  responses {
                    answer
                  }
                }
                privacy {
                  statement
                  responses {
                    answer
                  }
                }
                sharing {
                  statement
                  responses {
                    answer
                  }
                }
                communication {
                  statement
                  responses {
                    answer
                  }
                }
                criticalthinking {
                  statement
                  responses {
                    answer
                  }
                }
                responsibleuse {
                  statement
                  responses {
                    answer
                  }
                }
              }
              teachers {
                digitalknowledge {
                  statement
                  responses {
                    answer
                  }
                }
                privacy {
                  statement
                  responses {
                    answer
                  }
                }
                sharing {
                  statement
                  responses {
                    answer
                  }
                }
                communication {
                  statement
                  responses {
                    answer
                  }
                }
                criticalthinking {
                  statement
                  responses {
                    answer
                  }
                }
                responsibleuse {
                  statement
                  responses {
                    answer
                  }
                }
              }
              pupils {
                digitalknowledge {
                  statement
                  responses {
                    answer
                  }
                }
                privacy {
                  statement
                  responses {
                    answer
                  }
                }
                sharing {
                  statement
                  responses {
                    answer
                  }
                }
                communication {
                  statement
                  responses {
                    answer
                  }
                }
                criticalthinking {
                  statement
                  responses {
                    answer
                  }
                }
                responsibleuse {
                  statement
                  responses {
                    answer
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
