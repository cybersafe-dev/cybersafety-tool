import React from "react"
import { userStore } from "../../providers/userProvider"
import { navigate } from "gatsby"
import SchoolCard from "./schoolCard"
import useFirebase from "../../firebase"
import "../../styling/reporting/reporting.css"

const Reporting = () => {
  const [user] = React.useContext(userStore)
  const [allSchools, setAllSchools] = React.useState(null)
  const firebase = useFirebase()

  const signOutApp = () => {
    if (!firebase) return
    firebase.auth().signOut()
    navigate("/app/login")
  }

  React.useEffect(() => {
    let holdingArray = []
    const getAllSchools = async () => {
      await firebase
        .firestore()
        .collection("users")
        .orderBy("schoolName")
        .get()
        .then(query => {
          query.forEach(doc => {
            holdingArray.push(doc.data())
          })
          setAllSchools(holdingArray)
        })
        .catch(error => console.error(error))
    }
    getAllSchools()
  }, [firebase])

  if (!user || !firebase || !allSchools) return <h1>Loading...</h1>

  return (
    <section className="dashboard-body">
      <h1 className="admin-dash-heading">{user.schoolName}</h1>
      <h2 className="descriptive-title">Schools Signed Up:</h2>
      {allSchools.map(school =>
        school.schoolName ? (
          <SchoolCard key={school.schoolName} school={school} />
        ) : null
      )}
      <button className="logout-btn" onClick={signOutApp}>
        Log out
      </button>
    </section>
  )
}

export default Reporting
