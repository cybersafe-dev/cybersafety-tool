import React from "react"
import "../../styling/survey/categoryProgress.css"
const CategoryProgress = ({ currentQ, sectionLength }) => {
  return (
    <section>
      <div className="catprog-container">
        <p className="catprog-title">Question</p>
        <p className="catprog-fraction">
          {currentQ + 1}/{sectionLength}
        </p>
      </div>
    </section>
  )
}

export default CategoryProgress
