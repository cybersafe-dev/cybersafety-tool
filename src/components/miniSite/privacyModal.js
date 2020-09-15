

import React, { useEffect } from "react"
import "../../styling/survey/modal.css"

const PrivacyModal = ({ btnID }) => {
  useEffect(() => {
    var modal = document.getElementById("privacyModal")
    var btn = document.getElementById(btnID)
    var span = document.getElementsByClassName("modal-btn")
    btn.onclick = function() {
      modal.style.display = "block"
    }
    span.onclick = function() {
      modal.style.display = "none"
    }
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none"
      }
    }
  })
  return (
    <div id="privacyModal">
      <div className="modal-container">
        <div className="privacy-title">

          <h2>Privacy Policy</h2>
        </div>
        <div className="modal-content">
          <p>  For now, please link to this <a className="privacy-link" rel="noreferrer" href="https://cybersafeireland.org/privacy-policy-and-data-protection/" target="_blank">existing page on our site</a></p>
        </div>
        <span className="modal-btn">close</span>
      </div>
    </div>
  )
}
export default PrivacyModal
