import React from "react"
import { EmailShareButton } from "react-share"

import "../../styling/app/share.css"

const Share = ({ uid }) => {
  return (
    <>
      <EmailShareButton
        className="email-share"
        subject={`CyberSafe Tool for Schools`}
        body={`As a school we are taking part in a survey, click this link to find the app and follow the onscreen instructions to complete the survey.`}
        url={`https://cybersafetoolforschools.ie/survey/?id=${uid}`}
      >
        Share
      </EmailShareButton>
    </>
  )
}

export default Share
