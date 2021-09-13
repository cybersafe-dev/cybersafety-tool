import React from "react"

export const LanguageStore = React.createContext("")

const LanguageProvider = props => {
  const [language, setLanguage] = React.useState("en")

  return (
    <LanguageStore.Provider value={[language, setLanguage]}>
      {props.children}
    </LanguageStore.Provider>
  )
}

export default LanguageProvider