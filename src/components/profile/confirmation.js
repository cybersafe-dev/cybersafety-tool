import React from "react"

import Layout from "../../components/layout/layout"

import SEO from "../../components/seo"
import BgImg from "../../images/eoi-bg.svg"
import High5 from "../../images/mini-thanku.svg"

import "../../styling/survey/thankyou.css"

const Confirmation = () => (
  <Layout>
    <SEO title="Thank you!" />
    <h1 className="thanku-title">Thank you!</h1>
    <section className="thanku-container">
      <img src={BgImg} alt="background design" className="bg-img9" />
      <img src={High5} alt="rocket icon" className="high-five" />
      <p className="thanku-message">
        {" "}
        The results have been sent off to be evaluated. You will recieve your
        report shortly!{" "}
      </p>
    </section>
  </Layout>
)

export default Confirmation
