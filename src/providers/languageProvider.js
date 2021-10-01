import React from "react"
import Toggle from "../components/dashboard/languageToggle"
import "../styling/survey/languageToggle.css"


export const LanguageStore = React.createContext("")

const LanguageProvider = props => {
  const [irish, setIrish] = React.useState(false)

  return (
    <LanguageStore.Provider value={[irish, setIrish]}>
      {props.children}
    </LanguageStore.Provider>
  )
}

export default LanguageProvider
