import React from "react"
import Layout from "../components/layout/layout"
import { graphql, useStaticQuery } from "gatsby"
import ReactMarkdown from "react-markdown"
import SEO from "../components/seo"
import "../styling/app/index.css"

import { LanguageStore } from "../providers/languageProvider"

import MiniNavbar from "../components/miniSite/miniNavbar"
import PrivacyModal from "../components/miniSite/privacyModal"

import toolForSchoolsLogo from "../images/toolforschools-logo.png"
import Fig1 from "../images/self-assess.svg"
import Fig2 from "../images/cybersafety.svg"
import Fig3 from "../images/csi.svg"
import Marks from "../images/minisite-marks-bw-2022.png"
// colourful marks exist (remove -bw)

import Blogo from "../images/cybersafekids-blklogo.png"
import Surf from "../images/surfer.svg"
import Fb from "../images/fb.svg"
import Twit from "../images/twit.svg"
import Link from "../images/link.svg"
import Insta from "../images/insta.svg"
import Yout from "../images/yout.svg"

const MiniSite = props => {
  const [privacyModalVisible, toggle] = React.useState(true)
  const [irish] = React.useContext(LanguageStore)

  const miniSiteData = useStaticQuery(
    graphql`
      {
        english: allFile(
          filter: {
            sourceInstanceName: { eq: "content" }
            name: { eq: "minisite" }
          }
        ) {
          edges {
            node {
              childMarkdownRemark {
                frontmatter {
                  minisitecontent {
                    tool
                    awards
                    levels
                    pricing
                    aboutus
                  }
                }
              }
            }
          }
        }
        irish: allFile(
          filter: {
            sourceInstanceName: { eq: "content" }
            name: { eq: "irishminisite" }
          }
        ) {
          edges {
            node {
              childMarkdownRemark {
                frontmatter {
                  minisitecontentIrish {
                    aboutus
                    awards
                    levels
                    pricing
                    tool
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const data =
    miniSiteData.english.edges[0].node.childMarkdownRemark.frontmatter
  const irishData =
    miniSiteData.irish.edges[0].node.childMarkdownRemark.frontmatter

  return (
    <Layout>
      {privacyModalVisible && (
        <PrivacyModal
          privacyModalVisible={privacyModalVisible}
          toggle={toggle}
        />
      )}
      <MiniNavbar />
      <SEO title={irish ? "Baile" : "Home"} />
      <section className="section-container">
        <div id="tool">
          <div className="section">
            <h1 className="section-title-hidden">CyberSafe Tool for Schools</h1>
            <img
              src={toolForSchoolsLogo}
              alt="CyberSafe Tool for Schools Logo"
              className="cstfs-logo"
            />
            {irish ? (
              <ReactMarkdown
                className="site-text"
                source={irishData.minisitecontentIrish.tool}
              />
            ) : (
              <ReactMarkdown
                className="site-text"
                source={data.minisitecontent.tool}
              />
            )}
          </div>
          <img src={Fig1} alt="" className="fig" />
        </div>
        <div id="awards">
          <div className="section">
            {irish ? (
              <h2 className="section-title">
                Gradaim:{" "}
                <span className="italics">
                  Cén fáth ar fiú an uirlis a úsáid?
                </span>
              </h2>
            ) : (
              <h2 className="section-title">
                Awards: <span className="italics">Why use the tool?</span>
              </h2>
            )}
            {irish ? (
              <ReactMarkdown
                className="site-text"
                source={irishData.minisitecontentIrish.awards}
              />
            ) : (
              <ReactMarkdown
                className="site-text"
                source={data.minisitecontent.awards}
              />
            )}
          </div>
          <img src={Fig2} alt="" className="fig" />
        </div>
        <div id="levels">
          <div className="section">
            {irish ? (
              <h2 className="section-title">
                Na Leibhéil: <span className="italics">Céard iad?</span>
              </h2>
            ) : (
              <h2 className="section-title">
                Levels: <span className="italics">What are they?</span>
              </h2>
            )}
            {irish ? (
              <ReactMarkdown
                className="site-text"
                source={irishData.minisitecontentIrish.levels}
              />
            ) : (
              <ReactMarkdown
                className="site-text"
                source={data.minisitecontent.levels}
              />
            )}
            <img
              src={Marks}
              alt="The logos for each level of the mark"
              className="marks"
            />
            <span className="asterix">
              {" "}
              *Final award mark sent to schools will be full colour version.
            </span>
          </div>
        </div>
        <div id="pricing">
          <div className="section">
            {irish ? (
              <h2 className="section-title">
                Praghasáil: <span className="italics">Cé mhéad atá air?</span>
              </h2>
            ) : (
              <h2 className="section-title">
                Pricing: <span className="italics">How much does it cost?</span>
              </h2>
            )}
            {irish ? (
              <ReactMarkdown
                className="site-text"
                source={irishData.minisitecontentIrish.pricing}
              />
            ) : (
              <ReactMarkdown
                className="site-text"
                source={data.minisitecontent.pricing}
              />
            )}
            <div className="pricing-table-container">
              <section className="pricing-table-column">
                <h2 className="silver">Silver</h2>
                <p className="column-price">€0</p>
                <ul className="perks-list">
                  <li>School Assessment Grade (overall)</li>
                  <li>Confirmation of Completion</li>
                </ul>
              </section>
              <section className="pricing-table-column">
                <h2 className="gold">Gold</h2>
                <p className="column-price">€99</p>
                <ul className="perks-list">
                  <li>School Assessment Grade (overall)</li>
                  <li>School Assessment Breakdown Report</li>
                  <li>Award Certificate (for printing and display)</li>
                  <li>Access to Digital Award Badge (valid for one year)</li>
                </ul>
              </section>
            </div>
          </div>
        </div>

        <div id="about">
          <div className="section">
            {irish ? (
              <h2 className="section-title">
                Eolas fúinn: <span className="italics">Cé muid?</span>
              </h2>
            ) : (
              <h2 className="section-title">
                About us: <span className="italics">Who are we?</span>
              </h2>
            )}
            {irish ? (
              <ReactMarkdown
                className="site-text"
                source={irishData.minisitecontentIrish.aboutus}
              />
            ) : (
              <ReactMarkdown
                className="site-text"
                source={data.minisitecontent.aboutus}
              />
            )}
          </div>
          <img src={Fig3} alt="" className="fig" />
        </div>

        <div id="contact-us">
          <h2 className="section-title">{irish ? "Teaghmháil" : "Contact"}</h2>
          <div className="contact-section">
            <div className="contact-details">
              <img src={Blogo} alt="black-logo" className="blk-logo" />
              <span>Company number: 568651</span>
              <span>Registered charity number: 20104108</span>
              <span>93 Upper George Street, Dun Laoghaire,</span>
              <span>Co. Dublin, Ireland</span>
              <a
                className="hyperlink"
                href="mailto:info@cybersafekids.ie"
                target="_blank"
                rel="noreferrer"
              >
                info@cybersafekids.ie
              </a>
              <a
                className="csi-link"
                href="https://www.cybersafekids.ie/"
                target="_blank"
                rel="noreferrer"
              >
                {irish ? "Príomhshuíomh" : "Main Site"}
              </a>
              <a
                className="csi-link"
                href="https://www.cybersafekids.ie/privacy-policy/"
                target="_blank"
                rel="noreferrer"
              >
                {irish ? "Polasaí Príobháideachais" : "Privacy Policy"}
              </a>

              <div className="socials">
                <a
                  href="https://www.facebook.com/cybersafekidsie/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Fb} alt="" className="social" />
                </a>
                <a
                  href="https://twitter.com/cybersafekidsie"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Twit} alt="" className="social" />
                </a>
                <a
                  href="https://www.linkedin.com/company/cybersafeireland/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Link} alt="" className="social" />
                </a>
                <a
                  href="https://www.instagram.com/cybersafekidsie/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Insta} alt="" className="social" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCXQOFv_SBI_TDfuYeyToqaQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Yout} alt="" className="social" />
                </a>
              </div>
            </div>
            <div className="surf-container">
              <img src={Surf} alt="" className="surf" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default MiniSite
