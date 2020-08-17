
import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import "../styling/organisation/index.css"

import MiniNavbar from "../components/miniSite/miniNavbar"

import Fig1 from "../images/self-assess.svg"
import Fig2 from "../images/cybersafety.svg"
import Fig3 from "../images/csi.svg"

const MiniSite = () => {
  return (

    <Layout>
  <section id="index-container">
      <MiniNavbar />
      <SEO title="placeholder" />
        <section className="site-container">
        <h1 id="about" >Self-Assessment Tool</h1>
          <div className="about-section">
            <p className="intro-text"> Lorem ipsum doodoo daaaa </p>
            <img src={Fig1} className="fig1"/>
          </div>
          <h1 id="cybersafety" >Cybersafety</h1>
          <div className="cybersafety-section">
              <img src={Fig2} />
              <p> Lorem ipsum doodoo daaaa </p>
          </div>
            <h1 id="cybersafeireland"> CyberSafeIreland</h1>
          <div className="csi-section">
              <p> Lorem ipsum doodoo daaaa </p>
                <img src={Fig3} />
          </div>
          <h1 id="contact-us" className="contact-section">Contact Us</h1>
          <div className="contact-section">
              <p> Lorem ipsum doodoo daaaa </p>
          </div>
            <h1 id="get-started">Expression of Interest</h1>
              <div className="eoi-section">
            <p> Lorem ipsum doodoo daaaa </p>
          </div>
        </section>
</section>
    </Layout>

  )
}
export default MiniSite
