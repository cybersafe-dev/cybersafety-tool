import React from "react"
import "../styling/progress.css"

const Progress = ({ done, sectionLength, questionMessageData }) => {
  const [style, setStyle] = React.useState({})
  const [progressMessage, setProgressMessage] = React.useState("")
  const {
    surveyProgress,
  } = questionMessageData.allFile.edges[0].node.childMarkdownRemark.frontmatter

  React.useEffect(() => {
    if (sectionLength < 3) {
      setProgressMessage(() => surveyProgress.lessThanThree)
    } else {
      switch (done) {
        case 0:
          setProgressMessage(() => surveyProgress.first)
          break
        case sectionLength - 2:
          setProgressMessage(() => surveyProgress.penultimate)
          break
        case sectionLength - 1:
          setProgressMessage(() => surveyProgress.last)
          break
        default:
          setProgressMessage(() => surveyProgress.middle)
      }
    }
    // eslint-disable-next-line
  }, [done])

  const progressWidth = (done * 200) / sectionLength

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: progressWidth,
    }
    setStyle(newStyle)
  }, 100)

  return (
    <section className="progress-container">
      <p className="progress-message">{progressMessage}</p>
      <div className="progress">
        <div className="progress-done" style={style}></div>
      </div>
    </section>
  )
}

export default Progress
