import React from "react"
import Toggle from "../components/dashboard/languageToggle"
import "../styling/survey/languageToggle.css"


export const LanguageStore = React.createContext("")

const LanguageProvider = props => {
  const [language, setLanguage] = React.useState("en")

  return (
    <LanguageStore.Provider value={[language, setLanguage]}>
      {props.children}
  {/* <Toggle onChange={(event) => setLanguage(event.target.checked)}/>  */}
  {/* <p> language is {language ? "english" : "irish"}</p> */}
    </LanguageStore.Provider>
  )
}

export default LanguageProvider