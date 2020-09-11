import React from "react"
import Buff from "../../images/buffer.svg"
import Layout from "../../components/layout/layout"
import "../../styling/survey/buffer.css"

const Buffer = () => {
  return (
    <Layout>
    <section className="buffer-container">
    <img src={Buff} alt="" className="buffer" />
    <p className="buffer-message">
    The survey will begin in a few seconds.
    Read the questions carefully and answer as honestly as you can.</p>
    </section>
    </Layout>
  )
}

export default Buffer
