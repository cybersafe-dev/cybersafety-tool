import React from "react"
import Layout from "../../../components/layout/layout"
import "../../../styling/app/index.css"
import PropTypes from "prop-types"

import Fig1 from "../../../images/self-assess.svg"
import Fig2 from "../../../images/cybersafety.svg"
import Fig3 from "../../../images/csi.svg"

const MiniSitePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    return (
      <Layout>
        <section id="index-container">

          <section className="site-container">
            <div id="about">
              <h1>Self-Assessment Tool</h1>
              <div className="section">
                <div className="site-text">
                  <p> {data.minisitecontent.tool} </p>
                </div>
                <img src={Fig1} alt="" className="fig" />
              </div>
            </div>

            <div id="cybersafety">
              <h1 className="section-title">Cybersafety</h1>
              <div className="section">
                <img src={Fig2} alt="" className="fig" />
                <div className="site-text">
                <p> {data.minisitecontent.cybersafety} </p>
                </div>
              </div>
            </div>

            <div id="cybersafeireland">
            {/*eslint-disable-next-line*/}
                <h1 className="section-title">CyberSafeIreland🇮🇪</h1>
                  <div className="section">
                    <div className="site-text">
                    <p> {data.minisitecontent.cybersafeireland} </p>
                    </div>
                    <img src={Fig3} alt="" className="fig" />
                  </div>
            </div>
          </section>
        </section>
      </Layout>
    )
  } else {
    return <div>Loading...</div>
  }
}

MiniSitePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}
export default MiniSitePreview
