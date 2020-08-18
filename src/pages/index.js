
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
        <div id="about">
        <h1>Self-Assessment Tool</h1>
          <div className="about-section">
          <div className="site-text">
            <p >
            Welcome to the CybersafeIreland cybersafety self-assessment tool.
</p><p >
            This tool provides an opportunity for you to evaluate your school’s level of cybersafety across a series of categories with questionnaires aimed at school Leaders, Teachers and Pupils.
</p><p >
            Click ‘Get started’ to fill in an expression of interest and the CybersafeIreland team will contact you to get your school going with the tool. Contact us directly if you require more information.
            </p></div>
            <img src={Fig1} className="fig1"/>
          </div>
          </div>
          <div id="cybersafety">
          <h1>Cybersafety</h1>
          <div className="cybersafety-section">
              <img src={Fig2} />
              <div className="site-text">
              <p>
              Schools today are increasingly connected places and are often where kids’ early relationships with one other and with tech are formed. Technology plays an increasing role in these interactions but it comes with certain risks and uncertainties that can’t always be easily spotted.
</p><p>
              Parents are often aware of their children’s use of tech and their online interactions, but it is useful for schools to be aware of their level of cybersafety as well. This helps to protect children, schools and teachers from the risks and pitfalls of online life.
</p><p>
              We at CybersafeIreland have created a system for measuring a school’s cybersafety against a number of categories. Our self-assessment tool will allow meaningful answers from your staff and pupils to form a report and advice on where and how you could improve.
              </p>
              </div>
          </div>
          </div>
          <div id="cybersafeireland">
            <h1>CyberSafeIreland</h1>
          <div className="csi-section">
          <div className="site-text">
              <p>
              CyberSafeIreland is a not-for-profit organisation that works to empower children, parents and teachers to navigate the online world in a safe and responsible manner.
</p><p>
              We want our children to be able to embrace the opportunities for learning and enjoyment that technology can deliver, but we recognise that as parents and educators we have a responsibility to equip them with the tools to stay safe and avoid harm.
</p><p>
              We believe that everybody can play a role in keeping children safe online, including children themselves. Education is a key part of the solution and both schools and parents have a vital role to play in supporting children to be safe online.
              </p>
              </div>
                <img src={Fig3} />
                </div>
          </div>
          <div id="contact-us">
          <h1>Contact Us</h1>
          <div className="contact-section">
              <p>Lorem ipsum doodoo daaaa </p>
          </div>
          </div>
          <div id="get-started">
            <h1>Expression of Interest</h1>
              <div className="eoi-section">
            <p className="site-text">Lorem ipsum doodoo daaaa </p>
            </div>
          </div>
        </section>
          </section>
    </Layout>

  )
}
export default MiniSite
