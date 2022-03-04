/* eslint 'jsx-a11y/no-onchange': 0 */

import React from "react"
import { userStore } from "../../providers/userProvider"
import { navigate } from "gatsby"
import SEO from "../seo"
import SchoolCard from "./schoolCard"
import useFirebase from "../../firebase"
import "../../styling/reporting/reporting.css"
import { countyList } from "../../templates/countyList"

const Reporting = () => {
  const [user] = React.useContext(userStore)
  const [allSchools, setAllSchools] = React.useState(null)
  const [searchTerm, setsearchTerm] = React.useState("")
  const [selectedCounty, setSelectedCounty] = React.useState("")
  const [orderedBy, setOrderedBy] = React.useState({
    by: "updatedAt",
    ascDesc: "desc",
  })
  const [refreshCalls, refreshData] = React.useReducer(x => x + 1, 0)
  const firebase = useFirebase()

  const signOutApp = async () => {
    if (!firebase) return
    await firebase.auth().signOut()
    navigate("/app/login")
  }

  // Get and store all signed up schools from database when firebase exists
  // Refresh this call if the orderedBy state changes
  React.useEffect(() => {
    let holdingArray = []
    const getAllSchools = async () => {
      await firebase
        .firestore()
        .collection("users")
        .orderBy(orderedBy.by, orderedBy.ascDesc)
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
  }, [firebase, orderedBy, refreshCalls])

  // Update search values by searchname input or select by county
  const updateSearchValues = e => {
    if (e.target.name === "searchByName") {
      setsearchTerm(e.target.value)
    } else if (e.target.name === "countySelect") {
      setSelectedCounty(e.target.value)
    }
  }

  // Update the object by which the list is sorted on firebase query or toggle
  const updateOrderedBy = e => {
    const { value } = e.target
    setOrderedBy(prevState => {
      let args = { ...prevState }
      if (value === "schoolName") {
        args.by = "schoolName"
        args.ascDesc = "asc"
      } else if (value === "createdAt") {
        args.by = "createdAt"
        args.ascDesc = "desc"
      } else {
        args.by = "updatedAt"
        args.ascDesc = "desc"
      }
      return args
    })
  }

  // check for vital data before attempting to render schools.
  if (!user || !firebase || !allSchools)
    return <h1 className="admin-dash-heading-reporting">Loading...</h1>

  return (
    <section className="dashboard-body">
      <SEO title="CSI Admin" />
      <div className="reporting-tools-panel">
        <div className="search-tools">
          <label className="tools-label">
            School name:
            <input
              name="searchByName"
              className="tools-input"
              type="text"
              placeholder="search"
              value={searchTerm}
              onChange={updateSearchValues}
            />
          </label>

          <label className="tools-label">
            County:
            <select
              name="countySelect"
              className="tools-dropdown-select"
              value={selectedCounty}
              onChange={updateSearchValues}
            >
              <option value="">Choose a county</option>
              {countyList.map((countyName, i) => {
                return (
                  <option key={i} value={countyName}>
                    {countyName}
                  </option>
                )
              })}
            </select>
          </label>

          <label className="tools-label">
            Order by:
            <select
              className="tools-dropdown-select"
              value={orderedBy.by}
              onChange={updateOrderedBy}
            >
              <option value="updatedAt">Current tool run began</option>
              <option value="createdAt">Sign up date</option>
              <option value="schoolName">Alphabetical</option>
            </select>
          </label>
        </div>

        <button className="logout-btn" onClick={signOutApp}>
          Log out
        </button>
      </div>
      <h1 className="admin-dash-heading-reporting">{user.schoolName}</h1>
      <h2 className="descriptive-title">
        Schools Signed Up: {allSchools.length}
      </h2>
      {allSchools
        .filter(school => {
          if (selectedCounty) {
            return (
              school.schoolName
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) &&
              school.county === selectedCounty
            )
          } else {
            return school.schoolName
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          }
        })
        .map(school => (
          <SchoolCard
            key={school.uid}
            school={school}
            refreshData={refreshData}
          />
        ))}
    </section>
  )
}

export default Reporting
