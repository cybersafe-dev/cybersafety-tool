import React from "react"
import { navigate } from "gatsby"
import { ResponseStore } from "../../providers/responseProvider"

import Layout from "../../components/layout/layout"
import Header from "../../components/header/header"
import SEO from "../../components/seo"
import BgImg from "../../images/bg-gradient.svg"

import "../../styling/survey/roleselection.css"

import { LanguageStore } from "../../providers/languageProvider"

const RoleSelection = () => {
  // eslint-disable-next-line
  const [store, dispatch] = React.useContext(ResponseStore)
  const [irish] = React.useContext(LanguageStore)

  const handleUserSubmit = async user => {
    await dispatch({
      type: "RECORD_USERTYPE",
      payload: user,
    })
    navigate("/survey/dashboard/")
  }

  return (
    <Layout>
      <Header />
      <section className="selection-container">
        <SEO
          title={
            irish ? "Cuir isteach do Ról sa Scoil" : "Enter Your Role at School"
          }
        />
        <h1>{irish ? "Is.... Mé" : "I am a..."}</h1>
        <img src={BgImg} alt="background design" className="bg-img2" />
        <div className="roles">
          <button
            state={{ user: "leaders" }}
            className="leader"
            onClick={() => handleUserSubmit("leaders")}
          >
            {irish ? "Ceannaire" : "School Leader"}
          </button>
          <button
            state={{ user: "teachers" }}
            className="teacher"
            onClick={() => handleUserSubmit("teachers")}
          >
            {irish ? "Múinteoir" : "Teacher"}
          </button>
          <button
            state={{ user: "pupils" }}
            className="pupil"
            onClick={() => handleUserSubmit("pupils")}
          >
            {irish ? "Dalta" : "Pupil"}
          </button>
        </div>
        <p className="tagline">
          {" "}
          {irish
            ? "Cliceáil ar an gcnaipe thíos a dhéanann an cur síos is fearr ar do ról féin i do scoil."
            : "Click the button below that best describes your role at your school."}
        </p>
        <div className="role-pills">
          <div className="unfilled-pill"></div>
          <div className="filled-pill"></div>
        </div>
      </section>
    </Layout>
  )
}
export default RoleSelection
