import React from "react"
import "../../styling/survey/modal.css"

const Buffer = ({  bufferModalVisible, toggle }) => {

  return (
    <div id="bufferModal">
      <div className="modal-container">
        <div className="modal-content">
          <p>You will have one opportunity to answer each question. Please read the statements carefully and select the answer which matches your opinion best!</p>
        </div>
        <button onClick={() => toggle(!bufferModalVisible)} className="modal-btn">Let's go</button>
      </div>
    </div>
  )
}
export default Buffer
