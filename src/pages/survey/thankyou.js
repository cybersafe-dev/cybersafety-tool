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
        {" "}
        Your answers have been sent off to the cloud. You can close this window
        now or visit our website.{" "}
      </p>
      <a className="csi-btn" href="https://www.cybersafeireland.com/" target="_blank"
      rel="noreferrer">CyberSafeIreland</a>
    </section>
  </Layout>
)

export default ThankYou
