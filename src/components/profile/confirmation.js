import React from "react"

import Layout from "../../components/layout/layout"

import Seo from "../../components/seo"
import BgImg from "../../images/eoi-bg.svg"
import High5 from "../../images/mini-thanku.svg"

import "../../styling/survey/thankyou.css"

const Confirmation = () => (
  <Layout>
    <Seo title="Thank you!" />
    <h1 className="thanku-title">Thank you!</h1>
    <section className="thanku-container">
      <img src={BgImg} alt="background design" className="bg-img9" />
      <img src={High5} alt="high-five icon" className="design" />
      <p className="thanku-message">
        Thank you for completing the assessment. Your responses have now been
        sent to CyberSafeKids and you will receive your report soon. In the
        meantime, to find out more about getting the CyberSafe Tool for Schools'
        mark, please click{" "}
        <a
          className="link-back"
          href="https://www.cybersafekids.ie/"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>.
      </p>
    </section>
  </Layout>
)

export default Confirmation
