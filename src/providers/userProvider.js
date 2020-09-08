import React from "react"
import { generateUserDocument } from "../firebase"
import useFirebase from "../useFirebase"

export const userStore = React.createContext([{ user: null }])

const UserProvider = props => {
  const [user, setUser] = React.useState([])
  const [schoolName, setSchoolName] = React.useState("")
  const [pupilCount, setPupilCount] = React.useState("")
  const [quota, setQuota] = React.useState(null)
  const [firstName, setFirstName] = React.useState("")
  const [lastName, setLastName] = React.useState("")
  const [rollNumber, setRollNumber] = React.useState("")

  const firebase = useFirebase()
  const scores = {
    leaders: [],
    teachers: [],
    pupils: [],
  }

  React.useEffect(() => {
    if (parseInt(pupilCount) < 100) {
      setQuota({
        leadersQuota: 1,
        teachersQuota: 4,
        pupilsQuota: 12,
      })
    } else if (parseInt(pupilCount) > 199) {
      setQuota({
        leadersQuota: 3,
        teachersQuota: 14,
        pupilsQuota: 30,
      })
    } else {
      setQuota({
        leadersQuota: 2,
        teachersQuota: 8,
        pupilsQuota: 20,
      })
    }
  }, [pupilCount])

  React.useEffect(() => {
    if (!firebase) return

    return firebase.auth().onAuthStateChanged(async userAuth => {
      const user = await generateUserDocument(userAuth, {
        schoolName,
        pupilCount,
        scores,
        quota,
        firstName,
        lastName,
        rollNumber,
      })
      setUser(user)
    })
    // eslint-disable-next-line
  }, [firebase, schoolName, pupilCount, quota, firstName, lastName, rollNumber])

  return (
    <userStore.Provider
      value={[
        user,
        schoolName,
        setSchoolName,
        pupilCount,
        setPupilCount,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        rollNumber,
        setRollNumber,
      ]}
    >
      {props.children}
    </userStore.Provider>
  )
}

export default UserProvider
