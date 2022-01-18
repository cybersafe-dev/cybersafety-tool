import React from "react"
import { Link, graphql } from "gatsby"
import { ResponseStore } from "../../providers/responseProvider"
import { LanguageStore } from "../../providers/languageProvider"

import Layout from "../../components/layout/layout"
import SurveyDashMessages from "../../components/dashboard/surveyDashMessages"
import SEO from "../../components/seo"
import DataError from "../../components/dataerror/dataerror"

import SurveyProgress from "../../components/dashboard/surveyProgress"
import Buffer from "../../components/dashboard/buffer"
import BgImg from "../../images/bg-gradient.svg"
import Graphic from "../../images/dash.svg"

import Digital from "../../images/Digital-open.svg"
import DigitalDone from "../../images/Digital-done.svg"
import Privacy from "../../images/Privacy-open.svg"
import PrivacyDone from "../../images/Privacy-done.svg"
import Commun from "../../images/Comm-open.svg"
import CommDone from "../../images/Comm-done.svg"
import Critical from "../../images/Critical-open.svg"
import CriticalDone from "../../images/Critical-done.svg"
import Respons from "../../images/Respons-open.svg"
import ResponsDone from "../../images/Respons-done.svg"
import OnlineLife from "../../images/Onlife-open.svg"
import OnlineLifeDone from "../../images/Onlife-done.svg"

import IrishDigital from "../../images/irish-digital-open.svg"
import IrishDigitalDone from "../../images/irish-digital-done.svg"
import IrishPrivacy from "../../images/irish-privacy-open.svg"
import IrishPrivacyDone from "../../images/irish-privacy-done.svg"
import IrishCommun from "../../images/irish-comm-open.svg"
import IrishCommDone from "../../images/irish-comm-done.svg"
import IrishCritical from "../../images/irish-critical-open.svg"
import IrishCriticalDone from "../../images/irish-critical-done.svg"
import IrishRespons from "../../images/irish-respons-open.svg"
import IrishResponsDone from "../../images/irish-respons-done.svg"
import IrishOnlineLife from "../../images/irish-onlife-open.svg"
import IrishOnlineLifeDone from "../../images/irish-onlife-done.svg"

import "../../styling/survey/dashboard.css"

const Dashboard = ({ data }) => {
  const [store] = React.useContext(ResponseStore)
  const [irish] = React.useContext(LanguageStore)
  const [message, setMessage] = React.useState("")
  const [error, setError] = React.useState("")
  const [bufferModalVisible, toggle] = React.useState(true)

  const surveyAllData = {
    englishSurvey:
      data.english.edges[0].node.childMarkdownRemark.frontmatter.survey,
    irishSurvey:
      data.irish.edges[0].node.childMarkdownRemark.frontmatter.surveyIrish,
  }

  if (!store || !store.userType || !store.schoolId) {
    return <DataError />
  }

  const user = store.userType

  const userTypeEnglishSurvey = surveyAllData.englishSurvey[user]
  const userTypeIrishSurvey = surveyAllData.irishSurvey[user]

  let completedSections = []
  let sectionKeys = store.responses.map(response => Object.keys(response))
  sectionKeys.map(key => completedSections.push(key[0]))

  const repeatCategoryAlert = () => {
    irish
      ? setError("Roghnaigh catagóir eile")
      : setError(
          "You can only complete a category once. Please pick another category."
        )
  }

  // Debugging logs
  // console.log(user, "English:", userTypeEnglishSurvey, "Irish:", userTypeIrishSurvey)
  // console.log("messages", allDashMessages)
  // console.log("store in survey dash", store)

  return (
    <Layout>
      <SEO title={irish ? "Roghnaigh Catagóir" : "Choose a Category"} />
      <section className="dashboard-container">
        <div className="headline">
          <SurveyDashMessages
            error={error}
            completedSections={completedSections}
            message={message}
            setMessage={setMessage}
          />
        </div>
        {completedSections.length === 1 && bufferModalVisible ? (
          <Buffer bufferModalVisible={bufferModalVisible} toggle={toggle} />
        ) : null}
        <div className="body-content">
          <SurveyProgress
            completedSections={completedSections}
            setError={setError}
          />
          {!irish ? (
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
                      surveyData: {
                        english: userTypeEnglishSurvey.digitalknowledge,
                        irish: userTypeIrishSurvey.digitalknowledge,
                      },
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
                      surveyData: {
                        english: userTypeEnglishSurvey.privacy,
                        irish: userTypeIrishSurvey.privacy,
                      },
                      category: "Privacy",
                    }}
                  >
                    <img src={Privacy} alt="" className="cat-image" />
                  </Link>
                )}{" "}
                {completedSections.includes("onlinelife") ? (
                  <button
                    className="done-icon-button"
                    onClick={repeatCategoryAlert}
                  >
                    <img
                      src={OnlineLifeDone}
                      alt="Online Life complete"
                      className="cat-image"
                    />
                  </button>
                ) : (
                  <Link
                    to="/survey/category/"
                    state={{
                      surveyData: {
                        english: userTypeEnglishSurvey.onlinelife,
                        irish: userTypeIrishSurvey.onlinelife,
                      },
                      category: "Online Life",
                    }}
                  >
                    <img src={OnlineLife} alt="" className="cat-image" />
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
                      surveyData: {
                        english: userTypeEnglishSurvey.communication,
                        irish: userTypeIrishSurvey.communication,
                      },
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
                      surveyData: {
                        english: userTypeEnglishSurvey.criticalthinking,
                        irish: userTypeIrishSurvey.criticalthinking,
                      },
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
                      surveyData: {
                        english: userTypeEnglishSurvey.responsibleuse,
                        irish: userTypeIrishSurvey.responsibleuse,
                      },
                      category: "Responsible Use",
                    }}
                  >
                    <img src={Respons} alt="" className="cat-image" />
                  </Link>
                )}{" "}
              </div>
            </div>
          ) : (
            <div className="categories">
              <div className="col">
                {completedSections.includes("digitalknowledge") ? (
                  <button
                    className="done-icon-button"
                    onClick={repeatCategoryAlert}
                  >
                    <img
                      src={IrishDigitalDone}
                      alt="Digital Knowledge complete"
                      className="cat-image"
                    />
                  </button>
                ) : (
                  <Link
                    to="/survey/category/"
                    state={{
                      surveyData: {
                        english: userTypeEnglishSurvey.digitalknowledge,
                        irish: userTypeIrishSurvey.digitalknowledge,
                      },
                      category: "Digital Knowledge",
                    }}
                  >
                    <img src={IrishDigital} alt="" className="cat-image" />
                  </Link>
                )}{" "}
                {completedSections.includes("privacy") ? (
                  <button
                    className="done-icon-button"
                    onClick={repeatCategoryAlert}
                  >
                    <img
                      src={IrishPrivacyDone}
                      alt="Privacy complete"
                      className="cat-image"
                    />
                  </button>
                ) : (
                  <Link
                    to="/survey/category/"
                    state={{
                      surveyData: {
                        english: userTypeEnglishSurvey.privacy,
                        irish: userTypeIrishSurvey.privacy,
                      },
                      category: "Privacy",
                    }}
                  >
                    <img src={IrishPrivacy} alt="" className="cat-image" />
                  </Link>
                )}{" "}
                {completedSections.includes("onlinelife") ? (
                  <button
                    className="done-icon-button"
                    onClick={repeatCategoryAlert}
                  >
                    <img
                      src={IrishOnlineLifeDone}
                      alt="Online Life complete"
                      className="cat-image"
                    />
                  </button>
                ) : (
                  <Link
                    to="/survey/category/"
                    state={{
                      surveyData: {
                        english: userTypeEnglishSurvey.onlinelife,
                        irish: userTypeIrishSurvey.onlinelife,
                      },
                      category: "Online Life",
                    }}
                  >
                    <img src={IrishOnlineLife} alt="" className="cat-image" />
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
                      src={IrishCommDone}
                      alt="Communication complete"
                      className="cat-image"
                    />
                  </button>
                ) : (
                  <Link
                    to="/survey/category/"
                    state={{
                      surveyData: {
                        english: userTypeEnglishSurvey.communication,
                        irish: userTypeIrishSurvey.communication,
                      },
                      category: "Communication",
                    }}
                  >
                    <img src={IrishCommun} alt="" className="cat-image" />
                  </Link>
                )}{" "}
                {completedSections.includes("criticalthinking") ? (
                  <button
                    className="done-icon-button"
                    onClick={repeatCategoryAlert}
                  >
                    <img
                      src={IrishCriticalDone}
                      alt="Critical Thinking complete"
                      className="cat-image"
                    />
                  </button>
                ) : (
                  <Link
                    to="/survey/category/"
                    state={{
                      surveyData: {
                        english: userTypeEnglishSurvey.criticalthinking,
                        irish: userTypeIrishSurvey.criticalthinking,
                      },
                      category: "Critical Thinking",
                    }}
                  >
                    <img src={IrishCritical} alt="" className="cat-image" />
                  </Link>
                )}{" "}
                {completedSections.includes("responsibleuse") ? (
                  <button
                    className="done-icon-button"
                    onClick={repeatCategoryAlert}
                  >
                    <img
                      src={IrishResponsDone}
                      alt="Responsible Use complete"
                      className="cat-image"
                    />
                  </button>
                ) : (
                  <Link
                    to="/survey/category/"
                    state={{
                      surveyData: {
                        english: userTypeEnglishSurvey.responsibleuse,
                        irish: userTypeIrishSurvey.responsibleuse,
                      },
                      category: "Responsible Use",
                    }}
                  >
                    <img src={IrishRespons} alt="" className="cat-image" />
                  </Link>
                )}{" "}
              </div>
            </div>
          )}
        </div>
        <img src={BgImg} alt="background design" className="bg-img-dash" />
        <img src={BgImg} alt="background design" className="bg-img-dash1" />
      </section>
      <img src={Graphic} alt="background design" className="graphic" />
    </Layout>
  )
}
export default Dashboard

export const query = graphql`
  {
    english: allFile(
      filter: { sourceInstanceName: { eq: "content" }, name: { eq: "survey" } }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              survey {
                leaders {
                  communication {
                    responses {
                      answer
                    }
                    statement
                  }
                  criticalthinking {
                    responses {
                      answer
                    }
                    statement
                  }
                  digitalknowledge {
                    responses {
                      answer
                    }
                    statement
                  }
                  onlinelife {
                    responses {
                      answer
                    }
                    statement
                  }
                  privacy {
                    responses {
                      answer
                    }
                    statement
                  }
                  responsibleuse {
                    responses {
                      answer
                    }
                    statement
                  }
                }
                pupils {
                  communication {
                    responses {
                      answer
                    }
                    statement
                  }
                  criticalthinking {
                    responses {
                      answer
                    }
                    statement
                  }
                  digitalknowledge {
                    responses {
                      answer
                    }
                    statement
                  }
                  onlinelife {
                    responses {
                      answer
                    }
                    statement
                  }
                  privacy {
                    responses {
                      answer
                    }
                    statement
                  }
                  responsibleuse {
                    responses {
                      answer
                    }
                    statement
                  }
                }
                teachers {
                  communication {
                    responses {
                      answer
                    }
                    statement
                  }
                  criticalthinking {
                    responses {
                      answer
                    }
                    statement
                  }
                  digitalknowledge {
                    responses {
                      answer
                    }
                    statement
                  }
                  onlinelife {
                    responses {
                      answer
                    }
                    statement
                  }
                  privacy {
                    responses {
                      answer
                    }
                    statement
                  }
                  responsibleuse {
                    responses {
                      answer
                    }
                    statement
                  }
                }
              }
            }
          }
        }
      }
    }
    irish: allFile(
      filter: {
        sourceInstanceName: { eq: "content" }
        name: { eq: "irishsurvey" }
      }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              surveyIrish {
                leaders {
                  communication {
                    responses {
                      answer
                    }
                    statement
                  }
                  criticalthinking {
                    responses {
                      answer
                    }
                    statement
                  }
                  digitalknowledge {
                    responses {
                      answer
                    }
                    statement
                  }
                  onlinelife {
                    responses {
                      answer
                    }
                    statement
                  }
                  privacy {
                    responses {
                      answer
                    }
                    statement
                  }
                  responsibleuse {
                    responses {
                      answer
                    }
                    statement
                  }
                }
                pupils {
                  communication {
                    responses {
                      answer
                    }
                    statement
                  }
                  criticalthinking {
                    responses {
                      answer
                    }
                    statement
                  }
                  digitalknowledge {
                    responses {
                      answer
                    }
                    statement
                  }
                  onlinelife {
                    responses {
                      answer
                    }
                    statement
                  }
                  privacy {
                    responses {
                      answer
                    }
                    statement
                  }
                  responsibleuse {
                    responses {
                      answer
                    }
                    statement
                  }
                }
                teachers {
                  communication {
                    responses {
                      answer
                    }
                    statement
                  }
                  criticalthinking {
                    responses {
                      answer
                    }
                    statement
                  }
                  digitalknowledge {
                    responses {
                      answer
                    }
                    statement
                  }
                  onlinelife {
                    responses {
                      answer
                    }
                    statement
                  }
                  privacy {
                    responses {
                      answer
                    }
                    statement
                  }
                  responsibleuse {
                    responses {
                      answer
                    }
                    statement
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
