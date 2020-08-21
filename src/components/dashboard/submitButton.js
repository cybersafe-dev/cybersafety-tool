import React from "react"
import { navigate } from "gatsby"
import { ResponseStore } from "../../providers/responseProvider"
import { updateScores } from "../../firebase"
import "../../styling/survey/dashboard.css"

const SubmitButton = () => {
  const [store] = React.useContext(ResponseStore)
  //eslint-disable-next-line
  const {schoolId, userType} = store

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
      const average = Math.round(
        Object.values(category)[0].reduce((sum, value) => {
          return sum + parseInt(value)
        }, 0) / Object.values(category)[0].length
      )
      averagedScores[Object.keys(category)[0]] = average
    })
  }

  const handleSubmission = async () => {
    await averageScores()
    // scores will be added to the correct part of the database via schoolId and the userType
    const updateStatus = await updateScores(schoolId, userType, averagedScores)
    console.log(updateStatus)
    navigate("/survey/thankyou/")
  }

  return (
    <button className="submit-btn" onClick={handleSubmission}>
      Submit
    </button>
  )
}

export default SubmitButton
