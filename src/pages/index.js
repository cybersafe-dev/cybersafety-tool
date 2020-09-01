import React from "react"
import Layout from "../components/layout/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import "../styling/app/index.css"

import MiniNavbar from "../components/miniSite/miniNavbar"

import Fig1 from "../images/self-assess.svg"
import Fig2 from "../images/cybersafety.svg"
import Fig3 from "../images/csi.svg"
import Surf from "../images/surfer.svg"
import Fb from "../images/fb.svg"
import Twit from "../images/twit.svg"
import Link from "../images/link.svg"
import Insta from "../images/insta.svg"
import Yout from "../images/yout.svg"
import Flag from "../images/irish-flag.svg"



const MiniSite = props  => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <Layout>
      <section id="index-container">
        <MiniNavbar />
        <SEO title="Home - CyberSafeIreland" />
        <section className="site-container">
          <div id="about">
            <h1>Self-Assessment Tool</h1>
            <div className="section">
              <div className="site-text">
              <p> {data.minisite_content.tool} </p>
              </div>
              <img src={Fig1} alt="" className="fig" />
            </div>
          </div>

          <div id="cybersafety">
            <h1 className="section-title">Cybersafety</h1>
            <div className="section">
              <img src={Fig2} alt="" className="fig" />
              <div className="site-text">
                <p> {data.minisite_content.cybersafety} </p>
              </div>
            </div>
          </div>

          <div id="cybersafeireland">
            <div className="flag-container">
              <h1 className="section-title">CyberSafeIreland</h1>
              <img src={Flag} className="flag" alt="The Irish Flag" />
            </div>
            <div className="section">
              <div className="site-text">
              <p> {data.minisite_content.cybersafeireland} </p>
              </div>
              <img src={Fig3} alt="" className="fig" />
            </div>
          </div>
        </section>

        <div id="contact-us">
          <h1>Contact Us</h1>
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
      </section>
    </Layout>
  )
}
export default MiniSite

export const query = graphql`
  {
    allFile(filter: {
      sourceInstanceName: { eq: "content" }
      name: { eq: "minisite" }
    }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              minisite_content {
                cybersafeireland
                cybersafety
                tool
              }
            }
          }
        }
      }
    }
  }
`
