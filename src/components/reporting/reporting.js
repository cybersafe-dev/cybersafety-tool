import React from "react"
import { userStore } from "../../providers/userProvider"
import { navigate } from "gatsby"
import SEO from "../seo"
import SchoolCard from "./schoolCard"
import useFirebase from "../../firebase"
import "../../styling/reporting/reporting.css"

const Reporting = () => {
  const [user] = React.useContext(userStore)
  const [allSchools, setAllSchools] = React.useState(null)
  const [searchTerm, setsearchTerm] = React.useState("")
  const [firstLoad, setFirstLoad] = React.useState(true)
  const [filteredSchools, setFilteredSchools] = React.useState("")
  const [refreshCalls, refreshData] = React.useReducer(x => x + 1, 0)
  const firebase = useFirebase()

  const signOutApp = () => {
    if (!firebase) return
    firebase.auth().signOut()
    navigate("/app/login")
  }

  // Get and store all signed up schools from database when firebase exists
  React.useEffect(() => {
    let holdingArray = []
    const getAllSchools = async () => {
      await firebase
        .firestore()
        .collection("users")
        .orderBy("createdAt", "desc")
        .get()
        .then(query => {
          query.forEach(doc => {
            const data = doc.data()
            const uid = doc.id
            holdingArray.push({ uid: uid, ...data })
          })
          setAllSchools(holdingArray.filter(school => !school.isAdmin))
        })
        .catch(error => console.error(error))
    }
    getAllSchools()
  }, [firebase, refreshCalls])

  // If searchTerm state item is updated, run filter function
  React.useEffect(() => {
    filterSchools()
    //eslint-disable-next-line
  }, [searchTerm])

  // Update the search term store/input text and update first load status
  const updateSearchTerm = e => {
    setsearchTerm(e.target.value)
    setFirstLoad(false)
  }

  // If not the first load filter the schools based on search term and store.
  // If truthy the filtered schools will replace the full list on next render.
  const filterSchools = () => {
    if (!firstLoad) {
      setFilteredSchools(
        allSchools.filter(school => {
          return school.schoolName
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        })
      )
    }
  }

  // check for vital data before attempting to render schools.
  if (!user || !firebase || !allSchools)
    return <h1 className="admin-dash-heading-reporting">Loading...</h1>

  return (
    <section className="dashboard-body">
      <SEO title="CSI Admin" />
      <input
        className="filter-schools"
        type="text"
        placeholder="Filter by name"
        value={searchTerm}
        onChange={updateSearchTerm}
      />
      <h1 className="admin-dash-heading-reporting">{user.schoolName}</h1>
      <h2 className="descriptive-title">
        Schools Signed Up: {allSchools.length}
      </h2>
      {filteredSchools
        ? filteredSchools.map(
            school => (
              // school.schoolName ? (
              <SchoolCard
                key={school.uid}
                school={school}
                refreshData={refreshData}
              />
            )
            //  ) : null
          )
        : allSchools.map(
            school => (
              //  school.schoolName ? (
              <SchoolCard
                key={school.uid}
                school={school}
                refreshData={refreshData}
              />
            )
            //  ) : null
          )}
      <button className="logout-btn" onClick={signOutApp}>
        Log out
      </button>
    </section>
  )
}

export default Reporting
