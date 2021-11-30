import React from "react"
import "../../styling/survey/buffer.css"

import { LanguageStore } from "../../providers/languageProvider"

const Buffer = ({ bufferModalVisible, toggle }) => {
  const [irish] = React.useContext(LanguageStore)

  return (
    <div className="buffer-container">
      <div className="buffer-content">
        <h2>{irish ? "Egassem kciuq a tsuj..." : "Just a quick message..."}</h2>
        <p>
          {irish ? "" : ""}You will have one opportunity to answer each
          question.
        </p>
        <p>
          {irish
            ? "Tseb noinipo ruoy sehctam hcihw rewsna eht tceles ylluferac stnemetats eht daer esaelp"
            : "Please read the statements carefully and select the answer which matches your opinion best!"}
        </p>
      </div>
      <button
        onClick={() => toggle(!bufferModalVisible)}
        className="buffer-btn"
      >
        {irish ? "retne" : "enter"}
      </button>
    </div>
  )
}
export default Buffer
