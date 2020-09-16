import React from "react"
import { EmailShareButton } from "react-share"

import "../../styling/app/share.css"

const Share = ({ uid }) => {
  return (
    <>
      <EmailShareButton
        className="email-share"
        subject={`CyberSafe Tool for Schools`}
        body={`Hello and Thank you for taking part in a survey as part of the CyberSafe Tool for Schools! Click this link to find the app and follow the on-screen instructions to complete your survey.`}
        url={`https://cybersafetoolforschools.netlify.app/survey/?id=${uid}`}
      >
        Share
      </EmailShareButton>
    </>
  )
}

export default Share
