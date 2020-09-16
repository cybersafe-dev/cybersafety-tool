import React from "react"
import "../../styling/survey/buffer.css"

const Buffer = ({ bufferModalVisible, toggle }) => {
  return (
    <div className="buffer-container">
      <div className="buffer-content">
        <h2>Just a quick message...</h2>
        <p>You will have one opportunity to answer each question.</p>
        <p>
          Please read the statements carefully and select the answer which
          matches your opinion best!
        </p>
      </div>
      <button
        onClick={() => toggle(!bufferModalVisible)}
        className="buffer-btn"
      >
        enter
      </button>
    </div>
  )
}
export default Buffer
