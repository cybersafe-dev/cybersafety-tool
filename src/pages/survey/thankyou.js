import React from "react"

import Layout from "../../components/layout/layout"
import Header from "../../components/header/header"
import Seo from "../../components/seo"
import BgImg from "../../images/eoi-bg.svg"
import Rocket from "../../images/rocket.svg"

import "../../styling/survey/thankyou.css"

const ThankYou = () => (
  <Layout>
    <Header />
    <Seo title="Thank you!" />
    <section className="thanku-container">
      <h1 className="thanku-title">Thank you!</h1>
      <img src={BgImg} alt="background design" className="bg-img6" />
      <img src={Rocket} alt="rocket icon" className="design" />
      <p className="thanku-message">
        Thank you for completing the survey. Your responses have now been
        sent to CyberSafeKids, you can close this window now.
      </p>
      <a href="https://www.cybersafekids.ie/"><button className="ty-btn">CyberSafeKids</button></a>
    </section>
  </Layout>
)

export default ThankYou
