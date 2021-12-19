import React from "react"
import { EmailShareButton } from "react-share"

import { LanguageStore } from "../../providers/languageProvider"

import "../../styling/app/share.css"

const Share = ({ uid }) => {
  const [irish] = React.useContext(LanguageStore)

  const bodyString =
    "*Please copy and paste the link into a new browser tab if you have any problems clicking on it directly.\n\nAs a school we are taking part in a survey. Please use this link to find the survey and follow the onscreen instructions to complete it. Remember to click 'Submit'.\n\n"
  return (
    <>
      <EmailShareButton
        className="email-share"
        subject={`CyberSafe Tool for Schools`}
        body={bodyString}
        // body={`As a school we are taking part in a survey, click this link to find the app and follow the onscreen instructions to complete the survey.`}
        url={`https://cybersafetoolforschools.ie/survey/?id=${uid}`}
      >
        {irish ? "Roinn" : "Share"}
      </EmailShareButton>
    </>
  )
}

export default Share
