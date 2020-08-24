import React from "react"
import { generateUserDocument } from "../firebase"
import useFirebase from "../useFirebase"

export const userStore = React.createContext([{ user: null }])

const UserProvider = props => {
  const [user, setUser] = React.useState([])
  const [schoolName, setSchoolName] = React.useState("")
  const [schoolId, setSchoolId] = React.useState("")
  const [pupilCount, setPupilCount] = React.useState("")
  const firebase = useFirebase()
  const scores = {
    leaders: [],
    teachers: [],
    pupils: []
  }

  React.useEffect(() => {
    if (!firebase) return

    return firebase.auth().onAuthStateChanged(async userAuth => {
      const user = await generateUserDocument(userAuth, {
        schoolName,
        schoolId,
        pupilCount,
        scores,
      })
      setUser(user)
    })
    // eslint-disable-next-line
  }, [schoolName, schoolId, pupilCount, firebase])

  return (
    <userStore.Provider
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
    </userStore.Provider>
  )
}

export default UserProvider
