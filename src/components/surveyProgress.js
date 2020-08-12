import React from "react"

const SurveyProgress = ({ completedSections }) => {
    return (
        <section>
        <h2>Categories Completed:</h2>
        <p>{completedSections.length - 1}/6</p>
        </section>
    )
}

export default SurveyProgress