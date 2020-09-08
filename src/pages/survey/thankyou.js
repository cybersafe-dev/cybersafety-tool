import React from "react"

import Layout from "../../components/layout/layout"
import Header from "../../components/header/header"
import SEO from "../../components/seo"
import BgImg from "../../images/bg-gradient.svg"
import Rocket from "../../images/rocket.svg"

import "../../styling/survey/thankyou.css"

const ThankYou = () => (
  <Layout>
    <Header />
    <SEO title="Thank you!" />

    <h1 className="thanku-title">Thank you!</h1>
    <section className="thanku-container">
      <img src={BgImg} alt="background design" className="bg-img6" />
      <img src={Rocket} alt="rocket icon" className="rocket" />
      <p className="thanku-message">
        {" "}
        Your answers have been sent off to the cloud. You can close this window
        now.{" "}
      </p>
    </section>
  </Layout>
)

export default ThankYou
