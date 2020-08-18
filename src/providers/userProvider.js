import React from "react"
import { generateUserDocument } from "../firebase"
import useFirebase from "../useFirebase"

export const store = React.createContext([{ user: null }])

const UserProvider = props => {
  const [user, setUser] = React.useState([])
  const [schoolName, setSchoolName] = React.useState("")
  const [schoolId, setSchoolId] = React.useState("")
  const [pupilCount, setPupilCount] = React.useState("")
  const firebase = useFirebase()

  React.useEffect(() => {
    if (!firebase) return

    return firebase.auth().onAuthStateChanged(async userAuth => {
      const user = await generateUserDocument(userAuth, {
        schoolName,
        schoolId,
        pupilCount,
      })
      setUser(user)
    })
    // eslint-disable-next-line
  }, [schoolName, schoolId, pupilCount, firebase])

  return (
    <store.Provider
      value={[
        user,
        schoolName,
        setSchoolName,
        schoolId,
        setSchoolId,
        pupilCount,
        setPupilCount,
      ]}
    >
      {props.children}
    </store.Provider>
  )
}

export default UserProvider
