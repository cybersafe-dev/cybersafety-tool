import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import DataErrorPage from "../components/dataerror/dataerror"
import BgImg from "../images/bg-shape.svg"
import FileImg from "../images/file-graphic.svg"
import "../styling/dashboard.css"

const Dashboard = ({ location, data }) => {
  const { state = {} } = location
  if (!state) {
    return <DataErrorPage />
  }
  const { user } = state
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
          <Link
            to="/category/"
            state={{
              survey: userSpecificData.digitalknowledge,
              category: "Digital Knowledge",
            }}
          >
            Digital Knowledge
          </Link>{" "}
          <br />
          <Link
            to="/category/"
            state={{ survey: userSpecificData.privacy, category: "Privacy" }}
          >
            Privacy
          </Link>{" "}
          <br />
          <Link
            to="/category/"
            state={{ survey: userSpecificData.sharing, category: "Sharing" }}
          >
            Sharing
          </Link>{" "}
          <br />
          <Link
            to="/category/"
            state={{
              survey: userSpecificData.communication,
              category: "Communication",
            }}
          >
            Communication
          </Link>{" "}
          <br />
          <Link
            to="/category/"
            state={{
              survey: userSpecificData.criticalthinking,
              category: "Critical Thinking",
            }}
          >
            Critical Thinking
          </Link>{" "}
          <br />
          <Link
            to="/category/"
            state={{
              survey: userSpecificData.responsibleuse,
              category: "Responsible Use",
            }}
          >
            Responsible Use
          </Link>{" "}
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
