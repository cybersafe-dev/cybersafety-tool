import React from "react"

import Layout from "../../components/layout/layout"
import Header from "../../components/header/header"
import SEO from "../../components/seo"
import BgImg from "../../images/eoi-bg.svg"
import Rocket from "../../images/rocket.svg"

import "../../styling/survey/thankyou.css"

import { LanguageStore } from "../../providers/languageProvider"

const ThankYou = () => {
  const [irish] = React.useContext(LanguageStore)

  return (
    <Layout>
      <Header />
      <SEO title={irish ? "Uoy knaht!" : "Thank you!"} />
      <section className="thanku-container">
        <h1 className="thanku-title">{irish ? "Uoy knaht!" : "Thank you!"}</h1>
        <img src={BgImg} alt="background design" className="bg-img6" />
        <img src={Rocket} alt="rocket icon" className="design" />
        <p className="thanku-message">
          {irish
            ? "won wodniw siht esolc nac uoy ,sdiKefaSrebyC ot tnes neeb evah sesnopser ruoY .yevrus eht gnitelpmoc rof uoy knahT"
            : "Thank you for completing the survey. Your responses have been sent to CyberSafeKids, you can close this window now."}
        </p>
        <a href="https://www.cybersafekids.ie/">
          <button className="ty-btn">CyberSafeKids</button>
        </a>
      </section>
    </Layout>
  )
}

export default ThankYou
