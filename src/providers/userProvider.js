import React from "react"
import { generateUserDocument } from "../firebase"
import useFirebase from "../useFirebase"

export const userStore = React.createContext([{ user: null }])

const UserProvider = props => {
  const [user, setUser] = React.useState([])
  const [schoolName, setSchoolName] = React.useState("")
  const [county, setCounty] = React.useState("")
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
        teachersQuota: 1,
        pupilsQuota: 2,
      })
    } else if (parseInt(pupilCount) > 199) {
      setQuota({
        leadersQuota: 1,
        teachersQuota: 3,
        pupilsQuota: 4,
      })
    } else {
      setQuota({
        leadersQuota: 1,
        teachersQuota: 2,
        pupilsQuota: 3,
      })
    }
  }, [pupilCount])

  const reportSent = false

  React.useEffect(() => {
    if (!firebase) return

    return firebase.auth().onAuthStateChanged(async userAuth => {
      const user = await generateUserDocument(userAuth, {
        schoolName,
        county,
        pupilCount,
        scores,
        quota,
        firstName,
        lastName,
        rollNumber,
        reportSent,
      })
      setUser(user)
    })
    // eslint-disable-next-line
  }, [
    firebase,
    schoolName,
    county,
    pupilCount,
    quota,
    firstName,
    lastName,
    rollNumber,
    reportSent,
  ])

  return (
    <userStore.Provider
      value={[
        user,
        schoolName,
        setSchoolName,
        county,
        setCounty,
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
