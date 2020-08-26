import React from "react"
import { EmailShareButton } from "react-share"

import "../../styling/app/share.css"

const Share = ({ uid }) => {
  return (
    <>
      <EmailShareButton
        className="email-share"
        subject={`CyberSafeIreland: Self-Assessment Tool for Schools`}
        body={`Welcome to CyberSafeIreland's Self Assessment Tool. Click this link to find the app and follow the on-screen instructions.`}
        url={`https://vigilant-austin-33c3c5.netlify.app/survey/?id=${uid}`}
      >
        Share
      </EmailShareButton>
    </>
  )
}

export default Share
