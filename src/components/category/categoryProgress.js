import React from "react"
import "../../styling/survey/categoryProgress.css"
const CategoryProgress = ({ currentQ, sectionLength }) => {
  return (
    <section>
      <div className="catprogress-container">
        <p className="catprogress-title">Question</p>
        <p className="catprogress-fraction">
          {currentQ + 1}/{sectionLength}
        </p>
      </div>
    </section>
  )
}

export default CategoryProgress
