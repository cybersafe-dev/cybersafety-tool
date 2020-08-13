import React from "react"

const CategoryProgress = ({ currentQ, sectionLength }) => {
  return (
    <section>
      <p>question</p>
      <p>
        {currentQ + 1}/{sectionLength}
      </p>
    </section>
  )
}

export default CategoryProgress
