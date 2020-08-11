import React from "react"
import { Link, graphql } from "gatsby"
import { ResponseStore } from "../providers/responseProvider"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import DataErrorPage from "../components/dataerror/dataerror"

import BgImg from "../images/bg-gradient.svg"
import FileImg from "../images/file-graphic.svg"

import Digital from "../images/Digital-open.svg"
import Privacy from "../images/Privacy-open.svg"
import Sharing from "../images/Sharing-open.svg"
import Commun from "../images/Comm-open.svg"
import Critical from "../images/Critical-open.svg"
import Respons from "../images/Respons-open.svg"

import "../styling/dashboard.css"

const Dashboard = ({ location, data }) => {
  const [store] = React.useContext(ResponseStore)
  console.log({ store })
  //const { state = {} } = location
  //if (!state) {
  //  return <DataErrorPage />
  //}
  const user = store.userType
  if (!user) {
    return <DataErrorPage />
  }
  const surveyAllData =
    data.allFile.edges[0].node.childMarkdownRemark.frontmatter

  const userSpecificData = surveyAllData[user]
  console.log(user, userSpecificData)
  return (
    <Layout>
      <SEO title="Your Survey Dashboard" />
      <section className="dashboard-container">
        <h1 className="title">Your time starts now!</h1>
        <p className="explain">
          Click on a key to answer the questions for that category. See if you
          can complete all the categories before the timer runs out.
        </p>

        <img src={BgImg} alt="background design" className="bg-img3" />
        <img src={BgImg} alt="background design" className="bg-img4" />
        <div className="categories">
          <div className="col">
            <Link
              to="/category/"
              state={{
                survey: userSpecificData.digitalknowledge,
                category: "Digital Knowledge",
              }}
            >
              <img src={Digital} alt="" />
            </Link>{" "}
            <br />
            <Link
              to="/category/"
              state={{ survey: userSpecificData.privacy, category: "Privacy" }}
            >
              <img src={Privacy} alt="" />
            </Link>{" "}
            <br />
            <Link
              to="/category/"
              state={{ survey: userSpecificData.sharing, category: "Sharing" }}
            >
              <img src={Sharing} alt="" />
            </Link>{" "}
            <br />
          </div>
          <div className="col">
            <Link
              to="/category/"
              state={{
                survey: userSpecificData.communication,
                category: "Communication",
              }}
            >
              <img src={Commun} alt="" />
            </Link>{" "}
            <br />
            <Link
              to="/category/"
              state={{
                survey: userSpecificData.criticalthinking,
                category: "Critical Thinking",
              }}
            >
              <img src={Critical} alt="" />
            </Link>{" "}
            <br />
            <Link
              to="/category/"
              state={{
                survey: userSpecificData.responsibleuse,
                category: "Responsible Use",
              }}
            >
              <img src={Respons} alt="" />
            </Link>{" "}
          </div>
        </div>
        <img src={FileImg} alt="background design" className="file-image" />
      </section>
    </Layout>
  )
}
export default Dashboard

export const query = graphql`
  query {
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
