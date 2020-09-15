import React from "react"
import "../../styling/survey/privacy.css"

const PrivacyModal = ({ privacyModalVisible, toggle }) => {

  return (

      <div className="privacy-container">
        <div className="privacy-title">
          <h2>Privacy Policy</h2>
        </div>
        <div className="privacy-content">
          <p>  In accordance with GDPR, we would like to obtain your consent for marketing efforts. We’ll only ask once. </p>
          <p>Please read our privacy policy <a className="privacy-link" rel="noreferrer" href="https://cybersafeireland.org/privacy-policy-and-data-protection/" target="_blank">here.</a></p>
        </div>
        <button onClick={() => toggle(!privacyModalVisible)} className="privacy-btn">accept</button>
      </div>

  )
}
export default PrivacyModal
