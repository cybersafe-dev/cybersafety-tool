import React from "react"
import { navigate } from "gatsby"
import { store } from "../../providers/userProvider"
import useFirebase from "../../firebase"
import Share from "./share"
import Copy from "./copy"

import SurveyStats from "./surveyStats"
import "../../styling/app/adminDashboard.css"

const Profile = () => {
  const [user] = React.useContext(store)
  const { schoolName, email } = user

  const firebase = useFirebase()

  const signOutApp = () => {
    if (!firebase) return
    firebase.auth().signOut()
    navigate("/app/login")
  }

  return (
    <section className="dashboard-body">
      <div className="user-info">
        <h1>{schoolName}</h1>
      </div>
      <div className="columns">
        <article className="user-surveys">
          <h2>Surveys filled</h2>
          <SurveyStats />
        </article>
        <article className="user-links">
          <h2>Your survey link</h2>
          <div className="copy-share">
            <Share />
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
