import React from "react"
import { navigate } from "gatsby"
import { ResponseStore } from "../../providers/responseProvider"
import "../../styling/dashboard.css"

const SubmitButton = () => {
  const [store] = React.useContext(ResponseStore)
  const averagedScores = {
    digitalknowledge: [],
    privacy: [],
    sharing: [],
    communication: [],
    criticalthinking: [],
    responsibleuse: [],
  }

  const averageScores = () => {
    store.responses.forEach(category => {
      const average =
        Math.round(Object.values(category)[0].reduce((sum, value) => {
          return sum + parseInt(value)
        }, 0) / Object.values(category)[0].length)
      averagedScores[Object.keys(category)[0]] = average
    })
  }

  const handleSubmission = async () => {
    await averageScores()
    // scores will be added to the correct part of the database via schoolId and the userType
    console.log("Send to database:", averagedScores)
    navigate("/thankyou/")
  }

  return (
    <button className="submit-btn" onClick={handleSubmission}>
      Submit
    </button>
  )
}

export default SubmitButton
