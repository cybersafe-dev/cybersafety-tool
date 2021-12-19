import React from "react"
import "../../styling/survey/categoryProgress.css"

import { LanguageStore } from "../../providers/languageProvider"

const CategoryProgress = ({ currentQ, sectionLength }) => {
  const [irish] = React.useContext(LanguageStore)

  return (
    <section>
      <div className="catprogress-container">
        <p className="catprogress-title">{irish ? "Ceist" : "Question"}</p>
        <p className="catprogress-fraction">
          {currentQ + 1}/{sectionLength}
        </p>
      </div>
    </section>
  )
}

export default CategoryProgress
