import React from "react"
import { navigate } from "gatsby"
import { ResponseStore } from "../providers/responseProvider"

import Layout from "../components/layout/layout"
import Header from "../components/header/header"
import SEO from "../components/seo"
import BgImg from "../images/bg-gradient.svg"

import "../styling/enterid.css"

const SchoolId = () => {
  // eslint-disable-next-line
  const [store, dispatch] = React.useContext(ResponseStore)
  const [input, setInput] = React.useState("")

  const handleChange = e => {
    const { value } = e.target
    setInput(value)
  }

  const handleIdSubmit = async () => {
    await dispatch({
      type: "RECORD_USERID",
      payload: input,
    })
    navigate("/roleselection/")
  }

  return (
    <Layout>
      <Header />
      <SEO title="Enter School Id" />
      <section className="id-container">
        <h1 className="id-title">First step...</h1>
        <img src={BgImg} alt="background design" className="bg-img1" />
        <p className="tagline">
          {" "}
          To help us help you, please click and type the School ID you were
          given in the line below.
        </p>
        <input
          type="text"
          placeholder="e.g. SP0001abx"
          value={input}
          className="id-input"
          onChange={handleChange}
        />
        <button className="next-btn" onClick={handleIdSubmit}>
          Next
        </button>
        <div className="pills">
          <div className="unfilled-pill"></div>
          <div className="filled-pill"></div>
          <div className="unfilled-pill"></div>
        </div>
      </section>
    </Layout>
  )
}
export default SchoolId
