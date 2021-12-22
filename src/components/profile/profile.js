import React from "react"
import { navigate } from "gatsby"
import { userStore } from "../../providers/userProvider"
import useFirebase from "../../firebase"

import LanguageToggle from "../dashboard/languageToggle"
import { LanguageStore } from "../../providers/languageProvider"

import Share from "./share"
import Copy from "./copy"
import SEO from "../seo"

import SurveyStats from "./surveyStats"
import "../../styling/app/adminDashboard.css"

const Profile = () => {
  const [user] = React.useContext(userStore)
  const { schoolName, uid, reportSubmitted, quota, rollNumber } = user
  const [irish] = React.useContext(LanguageStore)

  const firebase = useFirebase()

  const signOutApp = () => {
    if (!firebase) return
    firebase.auth().signOut()
    navigate("/app/login")
  }

  return (
    <section className="dashboard-body">
      <SEO title={irish  ? "" : "Your School Admin Dashboard"} />
      <div className="user-info">
        <h1 className="admin-dash-heading">{schoolName}</h1>
      </div>
      <LanguageToggle />
      <div className="columns">
        <article className="user-surveys">
          <h2>{irish ? "Suirbhéanna Críochnaithe" : "Surveys Completed"}</h2>
          <SurveyStats
            uid={uid}
            schoolName={schoolName}
            reportSubmitted={reportSubmitted}
            quota={quota}
            rollNumber={rollNumber}
          />
        </article>
        <article className="user-links">
          <h2>{irish ? "Do nasc suirbhé" : "Your survey link"}</h2>
          <div className="copy-share">
            <Copy uid={uid} />
            <Share uid={uid} />
          </div>
          <p>
            {irish
              ? "Irish message para one"
              : "Please send the above survey link to the appropriate number of your school's Leaders, Teachers and Pupils as indicated on the left panel of this page."}
          </p>
          <p>
            {irish
              ? "Irish message para two"
              : "Keep an eye on this page and refresh it occasionally. After the correct number of surveys have been completed a button will appear to submit the responses to CyberSafeKids. You will then receive a report back in due course."}
          </p>
          <button className="logout-btn" onClick={signOutApp}>
            {irish ? "Logáil amach" : "Log out"}
          </button>
        </article>
      </div>
    </section>
  )
}
export default Profile
