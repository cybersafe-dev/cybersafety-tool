import React from "react"
import PropTypes from "prop-types"
import "../../../styling/survey/index.css"
import BgImg from "../../../images/bg-gradient.svg"
import Icon1 from "../../../images/intro-icon1.svg"
import Icon2 from "../../../images/intro-icon2.svg"
import Icon3 from "../../../images/intro-icon3.svg"
import Header from "../../../components/header/header"
import Layout from "../../../components/layout/layout"
import { Link } from "gatsby"

const InfopagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    return (
      <Layout>
      <Header />
      <section className="intropage-container">
        <h1> {data.title} </h1>
        <img src={BgImg} alt="background design" className="bg1" />
        <img src={BgImg} alt="background design" className="bg2" />
        <img src={BgImg} alt="background design" className="bg3" />
        <div className="introtext-box">
          <img src={Icon1} alt="background design" />
          <article className="para-1">
            <p> {data.body.paragraph1} </p>
          </article>
        </div>
        <div className="introtext-box">
          <article className="para-2">
            <p> {data.body.paragraph2} </p>
          </article>
          <img src={Icon2} alt="" />
        </div>
        <div className="introtext-box">
          <img src={Icon3} alt="" />
          <article className="para-3">
            <p> {data.body.paragraph3} </p>
          </article>
        </div>
        <Link to="/enterid/" className="start-btn">
          Let's get started!
        </Link>
        <div className="pills">
          <div className="filled-pill"></div>
          <div className="unfilled-pill"></div>
          <div className="unfilled-pill"></div>
        </div>
      </section>
    </Layout>

    )
  } else {
    return <div>Loading...</div>
  }
}

InfopagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default InfopagePreview
