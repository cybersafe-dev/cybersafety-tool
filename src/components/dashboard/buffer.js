import React from "react"
import "../../styling/survey/buffer.css"

import { LanguageStore } from "../../providers/languageProvider"

const Buffer = ({ bufferModalVisible, toggle }) => {
  const [irish] = React.useContext(LanguageStore)

  return (
    <div className="buffer-container">
      <div className="buffer-content">
        <h2>
          {irish ? "Teachtaireacht sciobtha…." : "Just a quick message..."}
        </h2>
        <p>
          {irish
            ? "Beidh deis amháin agat gach ceist a fhreagairt."
            : "You will have one opportunity to answer each question."}
        </p>
        <p>
          {irish
            ? "Léigh go cúramh na ráitis le do thoill agus roghnaigh an freagra is fearr a chloíonn le do thuairim féin!"
            : "Please read the statements carefully and select the answer which matches your opinion best!"}
        </p>
      </div>
      <button
        onClick={() => toggle(!bufferModalVisible)}
        className="buffer-btn"
      >
        {irish ? "Téigh isteach" : "enter"}
      </button>
    </div>
  )
}
export default Buffer
