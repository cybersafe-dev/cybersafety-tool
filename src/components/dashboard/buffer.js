import React, { useEffect } from "react"
import "../../styling/survey/modal.css"

const Buffer = ({ btnID }) => {
  useEffect(() => {
    var modal = document.getElementById("bufferModal")
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
    <div id="bufferModal">
      <div className="modal-container">
        <div class="privacy-title">

          <h2>Buffer placeholder</h2>
        </div>
        <div className="modal-content">
          <p>You will have one opportunity to answer each question. Please read the statements carefully and select the answer which matches your opinion best!</p>
        </div>
        <span className="modal-btn">Let's go</span>
      </div>
    </div>
  )
}
export default Buffer
