import React from "react"
import { navigate } from "gatsby"
// import { responseStore } from "../../providers/responseProvider"
import "../../styling/dashboard.css"

const SubmitButton = () => {
    //const [store, dispatch] = React.useContext(responseStore)

    const handleSubmission = async () => {
        navigate("/thankyou/")
    }

    return (
        <button className="submit-btn" onClick={handleSubmission}>Submit</button>
    )
}

export default SubmitButton