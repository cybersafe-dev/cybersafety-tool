import React from "react"
import Layout from "../components/layout/layout"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import SEO from "../components/seo"
import "../styling/app/index.css"

import MiniNavbar from "../components/miniSite/miniNavbar"
import PrivacyModal from "../components/miniSite/privacyModal"

import Fig1 from "../images/self-assess.svg"
import Fig2 from "../images/cybersafety.svg"
import Fig3 from "../images/csi.svg"
import Marks from "../images/minisite-marks-bw.svg"
// colourful marks exist (remove -bw)

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
            <h1 className="section-title">The Tool: What is it?</h1>
            <ReactMarkdown className="site-text" source={data.minisitecontent.tool} />
          </div>
            <img src={Fig1} alt="" className="fig" />
          </div>
        <div id="awards">
          <div className="section">
            <h1 className="section-title">Awards: Why use the tool?</h1>
            <ReactMarkdown className="site-text" source={data.minisitecontent.awards} />
          </div>
            <img src={Fig2} alt="" className="fig" />
          </div>
        <div id="levels">
          <div className="section">
            <h1 className="section-title">Levels: What are they? </h1>
            <ReactMarkdown className="site-text" source={data.minisitecontent.levels} />
          </div>
          </div>
            <img src={Marks} alt="" className="marks" />

          <div id="pricing">
            <div className="section">
              <h1 className="section-title">Pricing: How much does it cost?</h1>
              <ReactMarkdown className="site-text" source={data.minisitecontent.pricing} />
            </div>
          </div>
        <div id="about">
          <div className="section">
            <h1 className="section-title">About us: Who are we? </h1>
            <ReactMarkdown className="site-text" source={data.minisitecontent.aboutus} />
          </div>
            <img src={Fig3} alt="" className="fig" />
          </div>
      </section>

      <div id="contact-us">
        <h1 className="section-title">Contact Us</h1>
        <div className="contact-section">
          <div className="contact-details">
            <h3>CyberSafeIreland CLG</h3>
            <span>Company number: 568651</span>
            <span>Registered charity number: 20104108</span>
            <span>93 Upper George Street, Dun Laoghaire,</span>
            <span>Co. Dublin, Ireland</span>
            <p>info@cybersafeireland.org</p>
            <a
              className="csi-link"
              href="https://cybersafeireland.org/"
              target="_blank"
              rel="noreferrer"
            >
              Visit our homepage
            </a>
            <a
              className="csi-link"
              href="https://cybersafeireland.org/privacy-policy-and-data-protection/"
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
                href="https://www.instagram.com/cybersafeire/"
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
