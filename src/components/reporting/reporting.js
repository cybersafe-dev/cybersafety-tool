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
  const [filteredSchools, setFilteredSchools] = React.useState("")
  const [firstLoad, setFirstLoad] = React.useState(true)
  const [searchTerm, setsearchTerm] = React.useState("")
  const [selectedCounty, setSelectedCounty] = React.useState("")
  const [orderedBy, setOrderedBy] = React.useState({
    by: "createdAt",
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

  // If searchTerm state item is updated, run filter function
  React.useEffect(() => {
    filterSchools()
    //eslint-disable-next-line
  }, [searchTerm, selectedCounty])

  // Update the search values store/input text and update first load status
  const updateSearchValues = e => {
    if (e.target.name === "searchByName") {
      setsearchTerm(e.target.value)
    } else if (e.target.name === "countySelect") {
      setSelectedCounty(e.target.value)
    }
    setFirstLoad(false)
  }

  // Update the object by which the list is sorted on firebase query or toggle
  const updateOrderedBy = e => {
    const { value } = e.target
    setOrderedBy(prevState => {
      let args = { ...prevState }
      if (value === "schoolName") {
        args.by = "schoolName"
        args.ascDesc = "asc"
      } else {
        args.by = "createdAt"
        args.ascDesc = "desc"
      }
      return args
    })
  }

  // If not the first load filter the schools based on search term and store.
  // If truthy the filtered schools will replace the full list on next render.
  // If a county has been specified this value also affects the filter.
  const filterSchools = () => {
    if (!firstLoad) {
      setFilteredSchools(
        allSchools.filter(school => {
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
      )
    }
  }

  // check for vital data before attempting to render schools.
  if (!user || !firebase || !allSchools)
    return <h1 className="admin-dash-heading-reporting">Loading...</h1>

  return (
    <section className="dashboard-body">
      <SEO title="CSI Admin" />
      <div className="reporting-tools-panel">
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
            <option value="createdAt">Sign up date</option>
            <option value="schoolName">Alphabetical</option>
          </select>
        </label>
      </div>

      <h1 className="admin-dash-heading-reporting">{user.schoolName}</h1>
      <h2 className="descriptive-title">
        Schools Signed Up: {allSchools.length}
      </h2>
      {filteredSchools
        ? filteredSchools.map(school => (
            <SchoolCard
              key={school.uid}
              school={school}
              refreshData={refreshData}
            />
          ))
        : allSchools.map(school => (
            <SchoolCard
              key={school.uid}
              school={school}
              refreshData={refreshData}
            />
          ))}
      <button className="logout-btn" onClick={signOutApp}>
        Log out
      </button>
    </section>
  )
}

export default Reporting
