import React from "react"
import "../styling/progress.css"

const Progress = ({ done, sectionLength }) => {
  const [style, setStyle] = React.useState({})

  const progressWidth = done * 200 / sectionLength

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: progressWidth,
    }
    setStyle(newStyle)
  }, 100)

  return (
    <section className="progress-container">
      <p className="progress-message"> Progress Bar </p>
      <div className="progress">
        <div className="progress-done" style={style}></div>
      </div>
    </section>
  )
}

export default Progress
