import React from "react"

export const ResponseStore = React.createContext("")

const initialState = {
  schoolId: null,
  userType: null,
  responses: [{ test: [5, 4, 3, 2, 1] }],
}

const reducer = (store, action) => {
  switch (action.type) {
    case "RECORD_USERID":
      store.schoolId = action.payload
      sessionStorage.setItem("responses", JSON.stringify(store))
      return store
    case "RECORD_USERTYPE":
        store.userType = action.payload
        sessionStorage.setItem("responses", JSON.stringify(store))
        return store
    case "RECORD_RESPONSES":
        store.responses = [...store.responses, action.payload]
        sessionStorage.setItem("responses", JSON.stringify(store))
        return store
    case "REPLACE_LOST_STORE":
        store = action.payload
        return store
    default:
      throw new Error()
  }
}

const ResponseProvider = props => {
  const [store, dispatch] = React.useReducer(reducer, initialState)

  React.useEffect(() => {
    if (!store || !store.userType || !store.schoolId) {
      dispatch({
        type: "REPLACE_LOST_STORE",
        payload: JSON.parse(sessionStorage.getItem("responses")),
      })
    }
    // eslint-disable-next-line
  }, [])

  return (
    <ResponseStore.Provider value={[store, dispatch]}>
      {props.children}
    </ResponseStore.Provider>
  )
}

export default ResponseProvider
