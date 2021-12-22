import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { ResponseStore } from "../providers/responseProvider"
import Layout from "../components/layout/layout"
import Header from "../components/header/header"
import SEO from "../components/seo"
import ReactMarkdown from "react-markdown"

import Icon1 from "../images/intro-icon1.svg"
import Icon2 from "../images/self-assess.svg"
import Icon3 from "../images/intro-icon3.svg"
import BgImg from "../images/bg-gradient.svg"
import Half from "../images/half.svg"

import "../styling/survey/survey.css"

import { LanguageStore } from "../providers/languageProvider"

const SurveyPage = props => {
  const uid = props.location.search.split("=")[1]
  // eslint-disable-next-line
  const [store, dispatch] = React.useContext(ResponseStore)
  const [irish] = React.useContext(LanguageStore)

  const surveyInfoData = useStaticQuery(graphql`
    {
      english: allFile(
        filter: {
          sourceInstanceName: { eq: "content" }
          name: { eq: "infopage1" }
        }
      ) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                infocontent {
                  firstpara
                  secondpara
                  thirdpara
                }
              }
            }
          }
        }
      }
      irish: allFile(
        filter: {
          sourceInstanceName: { eq: "content" }
          name: { eq: "irishinfopage" }
        }
      ) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                infocontentIrish {
                  firstpara
                  secondpara
                  thirdpara
                }
              }
            }
          }
        }
      }
    }
  `)

  const data = surveyInfoData.english.edges[0].node.childMarkdownRemark.frontmatter
  const irishData =
    surveyInfoData.irish.edges[0].node.childMarkdownRemark.frontmatter

  React.useEffect(() => {
    dispatch({
      type: "RECORD_USERID",
      payload: uid,
    })
  }, [uid, dispatch])

  return (
    <Layout>
      <Header />
      <SEO title={irish ? "Réamhrá an tSuirbhé" : "Survey Introduction"} />
      <section className="intropage-container">
        <h1 className="welcome">{irish ? "Fáilte!" : "Welcome!"}</h1>
        <img src={BgImg} alt="background design" className="bg1" />
        <img src={Half} alt="background design" className="bg2" />
        <img src={Half} alt="background design" className="bg3" />
        <div className="introtext-box">
          <img src={Icon1} alt="" className="figure" />
          {irish ? (
            <ReactMarkdown
              className="para-1"
              source={irishData.infocontentIrish.firstpara}
            />
          ) : (
            <ReactMarkdown
              className="para-1"
              source={data.infocontent.firstpara}
            />
          )}
        </div>
        <div className="introtext-box-horiz-flipped">
          {irish ? (
            <ReactMarkdown
              className="para-1"
              source={irishData.infocontentIrish.secondpara}
            />
          ) : (
            <ReactMarkdown
              className="para-1"
              source={data.infocontent.secondpara}
            />
          )}
          <img src={Icon2} alt="" className="figure" />
        </div>
        <div className="introtext-box">
          <img src={Icon3} alt="" className="figure" />
          {irish ? (
            <ReactMarkdown
              className="para-1"
              source={irishData.infocontentIrish.thirdpara}
            />
          ) : (
            <ReactMarkdown
              className="para-1"
              source={data.infocontent.thirdpara}
            />
          )}
        </div>
        <div className="button-and-pills">
          <Link to="/survey/roleselection/" className="start-btn">
            {irish ? "Irish Get started!" : "Let's get started!"}
          </Link>
          <div className="pills">
            <div className="filled-pill"></div>
            <div className="unfilled-pill"></div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default SurveyPage

