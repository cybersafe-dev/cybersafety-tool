import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Header from "../components/header/header"
import SEO from "../components/seo"
import BgImg from "../images/bg-shape.svg"

import "../styling/roleselection.css"

const RoleSelection = () => {
  return (
    <Layout>
      <Header />
      <section className="selection-container">
        <SEO title="Enter Your Role at School" />
        <h1>I am a...</h1>
        <img src={BgImg} alt="background design" className="bg-img2" />
        <div className="roles">
          <Link to="/dashboard/" state={{ user: "leaders" }} className="leader">
            School Leader
          </Link>
          <Link
            to="/dashboard/"
            state={{ user: "teachers" }}
            className="teacher"
          >
            Teacher
          </Link>
          <Link to="/dashboard/" state={{ user: "pupils" }} className="pupil">
            Pupil
          </Link>
        </div>
        <p className="tagline">
          {" "}
          Click the button below that best describes your role at your school.
        </p>
        <div className="pills">
          <div className="filled-pill"></div>
          <div className="unfilled-pill"></div>
          <div className="unfilled-pill"></div>
        </div>
      </section>
    </Layout>
  )
}
export default RoleSelection
