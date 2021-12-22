import React from "react"
import "../../styling/survey/languageToggle.css"

import { LanguageStore } from "../../providers/languageProvider"

const LanguageToggle = ({ usage }) => {
  const [irish, setIrish] = React.useContext(LanguageStore)

  React.useEffect(() => {
    console.log("Irish?", irish)
  }, [irish])

  if (usage === "mobile navbar") {
    return (
      <button className="mobile-nav-toggle-button" onClick={() => setIrish(!irish)}>
        <p className="mobile-nav-toggle-text">{irish ? "English" : "Gaeilge"}</p>
      </button>
    )
  }

  return (
    <button className="toggle-button" onClick={() => setIrish(!irish)}>
      <p className="toggle-text">{irish ? "English" : "Gaeilge"}</p>
    </button>
  )
}

export default LanguageToggle
