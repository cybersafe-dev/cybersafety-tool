import React, { createContext, useState } from "react"

export const responseStore = createContext(null)

const ResponseProvider = props => {
  const [responseData, setResponseData] = useState(null)

  return (
    <responseStore.Provider value={[responseData, setResponseData]}>
      {props.children}
    </responseStore.Provider>
  )
}

export default ResponseProvider
