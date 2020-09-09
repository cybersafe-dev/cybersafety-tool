import React from "react"
import { Link, graphql } from "gatsby"
import { ResponseStore } from "../providers/responseProvider"
  // <img src={BgImg} alt="background design" className="bg3" />
import Layout from "../components/layout/layout"
import Header from "../components/header/header"
import SEO from "../components/seo"

import Icon1 from "../images/intro-icon1.svg"
import Icon2 from "../images/intro-icon2.svg"
import Icon3 from "../images/intro-icon3.svg"
import BgImg from "../images/bg-gradient.svg"
import Half from "../images/half.svg"

import "../styling/survey/survey.css"
const SurveyPage = props => {
  const uid = props.location.search.split("=")[1]
  // eslint-disable-next-line
  const [store, dispatch] = React.useContext(ResponseStore)
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter

  React.useEffect(() => {
    dispatch({
      type: "RECORD_USERID",
      payload: uid,
    })
  }, [uid, dispatch])

  return (
    <Layout>
      <Header />
      <SEO title="Survey Introduction" />
      <section className="intropage-container">
        <h1> {data.title} </h1>
        <img src={BgImg} alt="background design" className="bg1" />
        <img src={Half} alt="background design" className="bg2" />
        <img src={Half} alt="background design" className="bg3" />
        <div className="introtext-box">
          <img src={Icon1} alt="" className="figure" />
          <article className="para-1">
            <p> {data.body.paragraph1} </p>
          </article>
        </div>
        <div className="introtext-box">
          <article className="para-2">
            <p> {data.body.paragraph2} </p>
          </article>
          <img src={Icon2} alt="" className="figure" />
        </div>
        <div className="introtext-box">
          <img src={Icon3} alt="" className="figure" />
          <article className="para-3">
            <p> {data.body.paragraph3} </p>
          </article>
        </div>
        <Link to="/survey/roleselection/" className="start-btn">
          Let's get started!
        </Link>
        <div className="pills">
          <div className="filled-pill"></div>
          <div className="unfilled-pill"></div>
        </div>
      </section>
    </Layout>
  )
}
export default SurveyPage

export const query = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "content" }
        name: { eq: "infopage" }
      }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              body {
                paragraph1
                paragraph2
                paragraph3
              }
            }
          }
        }
      }
    }
  }
`
