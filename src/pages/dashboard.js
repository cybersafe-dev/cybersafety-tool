import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const Dashboard = ({ location, data }) => {
  const { state = {} } = location
  const { user } = state
  const surveyAllData =
    data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  const userSpecificData = surveyAllData[user]
  console.log(user, userSpecificData)
  return (
    <Layout>
      <SEO title="Your Survey Dashboard" />
      <h1>Your dashboard</h1>
      <Link
        to="/category/"
        state={{ survey: userSpecificData.digitalknowledge, category: "Digital Knowledge" }}
      >
        Digital Knowledge
      </Link>{" "}
      <br />
      <Link to="/category/" state={{ survey: userSpecificData.privacy, category: "Privacy" }}>
        Privacy
      </Link>{" "}
      <br />
      <Link to="/category/" state={{ survey: userSpecificData.sharing, category: "Sharing" }}>
        Sharing
      </Link>{" "}
      <br />
      <Link to="/category/" state={{ survey: userSpecificData.communication, category: "Communication" }}>
        Communication
      </Link>{" "}
      <br />
      <Link
        to="/category/"
        state={{ survey: userSpecificData.criticalthinking, category: "Critical Thinking" }}
      >
        Critical Thinking
      </Link>{" "}
      <br />
      <Link to="/category/" state={{ survey: userSpecificData.responsibleuse, category: "Responsible Use" }}>
        Responsible Use
      </Link>{" "}
      <br />
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
