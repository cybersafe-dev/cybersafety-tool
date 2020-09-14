import React from "react"

import Layout from "../../components/layout/layout"
import Header from "../../components/header/header"
import SEO from "../../components/seo"
import BgImg from "../../images/eoi-bg.svg"
import Rocket from "../../images/rocket.svg"

import "../../styling/survey/thankyou.css"

const ThankYou = () => (
  <Layout>
    <Header />
    <SEO title="Thank you!" />

    <section className="thanku-container">
      <h1 className="thanku-title">Thank you!</h1>
      <img src={BgImg} alt="background design" className="bg-img6" />
      <img src={Rocket} alt="rocket icon" className="design" />
      <p className="thanku-message">
        Thank you for completing the assessment. Your responses have now been sent to CyberSafeIreland and you will receive your report soon. In the meantime, to find out more about getting the CyberSafe Tool for Schools mark, please click <a className="link-back" href="/survey" target="_blank"
        rel="noreferrer">here</a>
      </p>

    </section>
  </Layout>
)

export default ThankYou
