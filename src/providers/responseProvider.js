import React from "react"

export const ResponseStore = React.createContext(null)

const ResponseProvider = props => {
  const [responseData, setResponseData] = React.useState("test")

  return (
    <ResponseStore.Provider value={[responseData, setResponseData]}>
      {props.children}
    </ResponseStore.Provider>
  )
}

export default ResponseProvider
