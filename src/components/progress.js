import React from "react"
import "../styling/progress.css"

const Progress = ({ done }) => {
  const [style, setStyle] = React.useState({})

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    }
    setStyle(newStyle)
  }, 200)

  return (
    <section className="progress-container">
      <div className="progress">
        <div className="progress-done" style={style}></div>
      </div>
    </section>
  )
}

export default Progress
