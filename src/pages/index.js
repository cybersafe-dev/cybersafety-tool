import React from "react"
import Layout from "../components/layout/layout"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import SEO from "../components/seo"
import "../styling/app/index.css"

import MiniNavbar from "../components/miniSite/miniNavbar"
import PrivacyModal from "../components/miniSite/privacyModal"

import toolForSchoolsLogo from "../images/toolforschools-logo.png"
import Fig1 from "../images/self-assess.svg"
import Fig2 from "../images/cybersafety.svg"
import Fig3 from "../images/csi.svg"
import Marks from "../images/minisite-marks-bw.png"
// colourful marks exist (remove -bw)

import Blogo from "../images/cybersafekids-blklogo.png"
import Surf from "../images/surfer.svg"
import Fb from "../images/fb.svg"
import Twit from "../images/twit.svg"
import Link from "../images/link.svg"
import Insta from "../images/insta.svg"
import Yout from "../images/yout.svg"

const MiniSite = props => {

const [privacyModalVisible, toggle] = React.useState(true);

  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <Layout>
    {privacyModalVisible && (
    <PrivacyModal privacyModalVisible={privacyModalVisible} toggle={toggle} /> )}
      <MiniNavbar />
      <SEO title="Home" />
      <section className="section-container">
        <div id="tool">
          <div className="section">
            <h1 className="section-title-hidden">CyberSafe Tool for Schools</h1>
            <img src={toolForSchoolsLogo} alt="CyberSafe Tool for Schools Logo" className="cstfs-logo" />
            <ReactMarkdown className="site-text" source={data.minisitecontent.tool} />
          </div>
            <img src={Fig1} alt="" className="fig" />
          </div>
        <div id="awards">
          <div className="section">
            <h2 className="section-title">Awards: <span className="italics">Why use the tool?</span></h2>
            <ReactMarkdown className="site-text" source={data.minisitecontent.awards} />
          </div>
            <img src={Fig2} alt="" className="fig" />
          </div>
        <div id="levels">
          <div className="section">
            <h2 className="section-title">Levels: <span className="italics">What are they?</span></h2>
            <ReactMarkdown className="site-text" source={data.minisitecontent.levels} />
            <img src={Marks} alt="The logos for each level of the mark" className="marks" />
            <span className="asterix"> *Final award mark sent to schools will be full colour version.</span>
          </div>
          </div>
          <div id="pricing">
            <div className="section">
              <h2 className="section-title">Pricing: <span className="italics">How much does it cost?</span></h2>
              <ReactMarkdown className="site-text" source={data.minisitecontent.pricing} />
              <div className="table">
                <div className="table-header">

                  <div className="header-field">
                    <span className="silver">
                      Silver
                    </span>
                      <div className="subheader-field">
                        €0
                      </div>
                  </div>

                <div className="header-field">
                  <span className="gold">
                    Gold
                  </span>
                    <div className="subheader-field">
                        €99
                    </div>
                </div>

                <div className="header-field">
                  <span className="platinum">
                    Platinum
                  </span>
                    <div className="subheader-field">
                      €249
                    </div>
                </div>

                </div>
                      <div className="table-body">
                              <div className="table-row">
                                <div className="body-field">
                                  Assessment Grade
                                </div>
                                <div className="body-field">
                                  Assessment Grade
                                </div>
                                <div className="body-field">
                                  Assessment Grade
                                </div>
                              </div>

                              <div className="table-row">
                                <div className="body-field">
                                  Completion Certificate
                                </div>
                                <div className="body-field">
                                  Full Assessment Report
                                </div>
                                <div className="body-field">
                                  Full Assessment Report with recommendations
                                </div>
                              </div>

                              <div className="table-row">
                                <div className="body-field">
                                </div>
                                <div className="body-field">
                                  Award Certificate
                                </div>
                                <div className="body-field">
                                  Award Certificate
                                </div>
                              </div>

                              <div className="table-row">
                                <div className="body-field">
                                </div>
                                <div className="body-field">
                                  Access to Award Mark (valid for 1 year)
                                </div>
                                <div className="body-field">
                                  Access to Award Mark (valid for 1 year)
                                </div>
                              </div>

                              <div className="table-row">
                                <div className="body-field">
                                </div>
                                <div className="body-field">
                                </div>
                                <div className="body-field">
                                  Sticker for all pupils
                                </div>
                              </div>

                              <div className="table-row">
                                <div className="body-field">
                                </div>
                                <div className="body-field">
                                </div>
                                <div className="body-field">
                                  Access to choice of 1 free e-learning module for 10 staff
                                </div>
                              </div>
                    </div>
              </div>
            </div>
          </div>

        <div id="about">
          <div className="section">
            <h2 className="section-title">About us: <span className="italics">Who are we?</span></h2>
            <ReactMarkdown className="site-text" source={data.minisitecontent.aboutus} />
          </div>
            <img src={Fig3} alt="" className="fig" />
          </div>
      </section>

      <div id="contact-us">
        <h2 className="section-title">Contact</h2>
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
              Main Site
            </a>
            <a
              className="csi-link"
              href="https://www.cybersafekids.ie/privacy-policy/"
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy
            </a>
            <div className="socials">
              <a
                href="https://www.facebook.com/cybersafeireland"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Fb} alt="" className="social" />
              </a>
              <a
                href="https://twitter.com/CyberSafeIE"
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
                href="https://www.youtube.com/channel/UCbK06TfABt_GIXWeWBziXMA?view_as=subscriber"
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
    </Layout>
  )
}
export default MiniSite

export const query = graphql`
  {
    allFile(
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
  }
`
