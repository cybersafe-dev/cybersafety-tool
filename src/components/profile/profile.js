import React from "react"
import { navigate } from "gatsby"
import { userStore } from "../../providers/userProvider"
import useFirebase from "../../firebase"
import Share from "./share"
import Copy from "./copy"
import SEO from "../seo"

import SurveyStats from "./surveyStats"
import "../../styling/app/adminDashboard.css"

const Profile = () => {
  const [user] = React.useContext(userStore)
  const { schoolName, uid, reportSubmitted, quota } = user

  const firebase = useFirebase()

  const signOutApp = () => {
    if (!firebase) return
    firebase.auth().signOut()
    navigate("/app/login")
  }

  return (
    <section className="dashboard-body">
      <SEO title="Your School Admin Dashboard" />
      <div className="user-info">
        <h1 className="admin-dash-heading">{schoolName}</h1>
      </div>
      <div className="columns">
        <article className="user-surveys">
          <h2>Surveys Completed</h2>
          <SurveyStats
            uid={uid}
            schoolName={schoolName}
            reportSubmitted={reportSubmitted}
            quota={quota}
          />
        </article>
        <article className="user-links">
          <h2>Your survey link</h2>
          <div className="copy-share">
            <Copy uid={uid} />
            <Share uid={uid} />
          </div>
          <p>
            Please send this link to the appropriate number of school Leaders,
            Teachers and Pupils along with your unique school ID.
          </p>
          <p>
            Once the correct number of surveys have been filled you will be able
            to submit the responses to CybersafeIreland
          </p>
          <button className="logout-btn" onClick={signOutApp}>
            Log out
          </button>
        </article>
      </div>
    </section>
  )
}
export default Profile
