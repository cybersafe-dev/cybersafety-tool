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
  const { schoolName, uid, reportSubmitted, quota, rollNumber } = user

  const firebase = useFirebase()

  const signOutApp = async () => {
    if (!firebase) return
    await firebase.auth().signOut()
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
            rollNumber={rollNumber}
          />
        </article>
        <article className="user-links">
          <h2>Your survey link</h2>
          <div className="copy-share">
            <Copy uid={uid} />
            <Share uid={uid} />
          </div>
          <div className="user-instructions">
            <p>
              Please send the above survey link to the appropriate number of
              your school's Leaders, Teachers and Pupils as indicated on the
              left panel of this page.
            </p>
            <p>
              Keep an eye on this page and refresh it occasionally. After the
              correct number of surveys have been completed a button will appear
              to submit the responses to CyberSafeKids. You will then receive a
              report back in due course.
            </p>
          </div>
          <button className="logout-btn" onClick={signOutApp}>
            Log out
          </button>
        </article>
      </div>
    </section>
  )
}
export default Profile
