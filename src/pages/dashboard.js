import React from "react"
import { Link, graphql } from "gatsby"
import { ResponseStore } from "../providers/responseProvider"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import DataErrorPage from "../components/dataerror/dataerror"
import SurveyProgress from "../components/surveyProgress"
import SurveyDashMessages from "../components/surveyDashMessages"

import BgImg from "../images/bg-gradient.svg"
import FileImg from "../images/file-graphic.svg"

import Digital from "../images/Digital-open.svg"
import DigitalDone from "../images/Digital-done.svg"
import Privacy from "../images/Privacy-open.svg"
import PrivacyDone from "../images/Privacy-done.svg"
import Sharing from "../images/Sharing-open.svg"
import SharingDone from "../images/Sharing-done.svg"
import Commun from "../images/Comm-open.svg"
import CommDone from "../images/Comm-done.svg"
import Critical from "../images/Critical-open.svg"
import CriticalDone from "../images/Critical-done.svg"
import Respons from "../images/Respons-open.svg"
import ResponsDone from "../images/Respons-done.svg"

import "../styling/dashboard.css"

const Dashboard = ({ data }) => {
  const [store] = React.useContext(ResponseStore)

  const surveyAllData =
    data.allFile.edges[2].node.childMarkdownRemark.frontmatter

  const allDashMessages =
    data.allFile.edges[1].node.childMarkdownRemark.frontmatter

  const [message, setMessage] = React.useState(
    "Click on a key to answer the questions for that category. See if you can complete all the categories before the timer gets to twenty minutes."
  )

  if (!store || !store.userType) {
    return <DataErrorPage />
  }

  const user = store.userType
  const userSpecificData = surveyAllData[user]

  let completedSections = []
  let sectionKeys = store.responses.map(response => Object.keys(response))
  sectionKeys.map(key => completedSections.push(key[0]))

  const repeatCategoryAlert = () => {
    setMessage(allDashMessages.dashboardMessages.categoryRepeat)
  }

  console.log(user, userSpecificData)
  console.log({ store })

  return (
    <Layout>
      <SEO title="Your Survey Dashboard" />
      <section className="dashboard-container">
        <SurveyDashMessages
          allDashMessages={allDashMessages}
          completedSections={completedSections}
          message={message}
          setMessage={setMessage}
        />
        <SurveyProgress completedSections={completedSections} />

        <img src={BgImg} alt="background design" className="bg-img3" />
        <img src={BgImg} alt="background design" className="bg-img4" />
        <div className="categories">
          <div className="col">
            {completedSections.includes("digitalknowledge") ? (
              <img
                src={DigitalDone}
                alt="Digital Knowledge complete"
                onClick={repeatCategoryAlert}
              />
            ) : (
              <Link
                to="/category/"
                state={{
                  survey: userSpecificData.digitalknowledge,
                  category: "Digital Knowledge",
                }}
              >
                <img src={Digital} alt="" />
              </Link>
            )}{" "}
            <br />
            {completedSections.includes("privacy") ? (
              <img
                src={PrivacyDone}
                alt="Privacy complete"
                onClick={repeatCategoryAlert}
              />
            ) : (
              <Link
                to="/category/"
                state={{
                  survey: userSpecificData.privacy,
                  category: "Privacy",
                }}
              >
                <img src={Privacy} alt="" />
              </Link>
            )}{" "}
            <br />
            {completedSections.includes("sharing") ? (
              <img
                src={SharingDone}
                alt="Sharing complete"
                onClick={repeatCategoryAlert}
              />
            ) : (
              <Link
                to="/category/"
                state={{
                  survey: userSpecificData.sharing,
                  category: "Sharing",
                }}
              >
                <img src={Sharing} alt="" />
              </Link>
            )}{" "}
            <br />
          </div>
          <div className="col">
            {completedSections.includes("communication") ? (
              <img
                src={CommDone}
                alt="Communication complete"
                onClick={repeatCategoryAlert}
              />
            ) : (
              <Link
                to="/category/"
                state={{
                  survey: userSpecificData.communication,
                  category: "Communication",
                }}
              >
                <img src={Commun} alt="" />
              </Link>
            )}{" "}
            <br />
            {completedSections.includes("criticalthinking") ? (
              <img
                src={CriticalDone}
                alt="Critical Thinking complete"
                onClick={repeatCategoryAlert}
              />
            ) : (
              <Link
                to="/category/"
                state={{
                  survey: userSpecificData.criticalthinking,
                  category: "Critical Thinking",
                }}
              >
                <img src={Critical} alt="" />
              </Link>
            )}{" "}
            <br />
            {completedSections.includes("responsibleuse") ? (
              <img
                src={ResponsDone}
                alt="Responsible Use complete"
                onClick={repeatCategoryAlert}
              />
            ) : (
              <Link
                to="/category/"
                state={{
                  survey: userSpecificData.responsibleuse,
                  category: "Responsible Use",
                }}
              >
                <img src={Respons} alt="" />
              </Link>
            )}{" "}
          </div>
        </div>
        <img src={FileImg} alt="background design" className="file-image" />
      </section>
    </Layout>
  )
}
export default Dashboard

export const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "content" } }) {
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
              surveyHints {
                general
                last
              }
              surveyProgress {
                first
                last
                lessThanThree
                middle
                penultimate
              }
            }
          }
        }
      }
    }
  }
`
