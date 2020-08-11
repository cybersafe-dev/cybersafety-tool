import React from "react"

const initialState = {
  schoolId: null,
  userType: null,
  responses: [{ test: [5, 4, 3, 2, 1] }],
}

export const ResponseStore = React.createContext("")

const reducer = (state, action) => {
  switch (action.type) {
    case "RECORD_USERID":
      return {
        schoolId: action.payload,
      }
    case "RECORD_USERTYPE":
      return {
        userType: action.payload,
      }
    case "RECORD_RESPONSES":
      return {
        responses: [...state.responses, action.payload],
      }
    default:
      throw new Error()
  }
}

const ResponseProvider = props => {
  const [data, dispatch] = React.useReducer(reducer, initialState)

  return (
    <ResponseStore.Provider value={[data, dispatch]}>
      {props.children}
    </ResponseStore.Provider>
  )
}

export default ResponseProvider
