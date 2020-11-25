import React from "react"
import Layout from "../../../components/layout/layout"
import "../../../styling/app/index.css"
import PropTypes from "prop-types"
import ReactMarkdown from "react-markdown"
import Fig1 from "../../../images/self-assess.svg"
import Fig2 from "../../../images/cybersafety.svg"
import Fig3 from "../../../images/csi.svg"

const MiniSitePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    return (
      <Layout>
      
        <section className="section-container">
          <div id="tool">
            <div className="section">
              <h1 className="section-title">The Tool: <span className="italics">What is it?</span></h1>
              <ReactMarkdown className="site-text" source={data.minisitecontent.tool} />
            </div>
              <img src={Fig1} alt="" className="fig" />
            </div>
          <div id="awards">
            <div className="section">
              <h1 className="section-title">Awards: <span className="italics">Why use the tool?</span></h1>
              <ReactMarkdown className="site-text" source={data.minisitecontent.awards} />
            </div>
              <img src={Fig2} alt="" className="fig" />
            </div>
          <div id="levels">
            <div className="section">
              <h1 className="section-title">Levels: <span className="italics">What are they?</span></h1>
              <ReactMarkdown className="site-text" source={data.minisitecontent.levels} />
            </div>
            </div>
              <img src={Marks} alt="" className="marks" />
            <div id="pricing">
              <div className="section">
                <h1 className="section-title">Pricing: <span className="italics">How much does it cost?</span></h1>
                <ReactMarkdown className="site-text" source={data.minisitecontent.pricing} />
              </div>
            </div>
          <div id="about">
            <div className="section">
              <h1 className="section-title">About us: <span className="italics">Who are we?</span></h1>
              <ReactMarkdown className="site-text" source={data.minisitecontent.aboutus} />
            </div>
              <img src={Fig3} alt="" className="fig" />
            </div>
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
