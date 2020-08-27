import React from "react"
import { generateUserDocument } from "../firebase"
import useFirebase from "../useFirebase"

export const userStore = React.createContext([{ user: null }])

const UserProvider = props => {
  const [user, setUser] = React.useState([])
  const [schoolName, setSchoolName] = React.useState("")
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
        pupilCount,
        scores,
      })
      setUser(user)
    })
    // eslint-disable-next-line
  }, [schoolName, pupilCount, firebase])

  return (
    <userStore.Provider
      value={[
        user,
        schoolName,
        setSchoolName,
        pupilCount,
        setPupilCount,
      ]}
    >
      {props.children}
    </userStore.Provider>
  )
}

export default UserProvider
