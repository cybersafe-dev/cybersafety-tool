import React from "react"
import { navigate } from "gatsby"
import { ResponseStore } from "../../providers/responseProvider"

import Layout from "../../components/layout/layout"
import Header from "../../components/header/header"
import SEO from "../../components/seo"
import BgImg from "../../images/bg-gradient.svg"

import "../../styling/survey/roleselection.css"

const RoleSelection = () => {
  // eslint-disable-next-line
  const [store, dispatch] = React.useContext(ResponseStore)

  const handleUserSubmit = async user => {
    await dispatch({
      type: "RECORD_USERTYPE",
      payload: user,
    })
    navigate("/dashboard/")
  }

  return (
    <Layout>
      <Header />
      <section className="selection-container">
        <SEO title="Enter Your Role at School" />
        <h1>I am a...</h1>
        <img src={BgImg} alt="background design" className="bg-img2" />
        <div className="roles">
          <button
            state={{ user: "leaders" }}
            className="leader"
            onClick={() => handleUserSubmit("leaders")}
          >
            School Leader
          </button>
          <button
            state={{ user: "teachers" }}
            className="teacher"
            onClick={() => handleUserSubmit("teachers")}
          >
            Teacher
          </button>
          <button
            state={{ user: "pupils" }}
            className="pupil"
            onClick={() => handleUserSubmit("pupils")}
          >
            Pupil
          </button>
        </div>
        <p className="tagline">
          {" "}
          Click the button below that best describes your role at your school.
        </p>
        <div className="pills">
          <div className="unfilled-pill"></div>
          <div className="unfilled-pill"></div>
          <div className="filled-pill"></div>
        </div>
      </section>
    </Layout>
  )
}
export default RoleSelection
