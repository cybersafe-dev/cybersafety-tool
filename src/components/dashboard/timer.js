import React from "react"

import { LanguageStore } from "../../providers/languageProvider"
import { TimerStore } from "../../providers/timerProvider"
import Time from "../../images/timer.svg"
import "../../styling/survey/timer.css"

const Timer = () => {
  const [time, start] = React.useContext(TimerStore)
  const [irish] = React.useContext(LanguageStore)

  React.useEffect(() => {
    if (time === "00:00") {
      start()
    }
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div className="timer-container">
        <div className="timer">
          <img src={Time} alt="" className="time-icon" />
          <span>
            {time.split(":")[0] >= 10 ? (
              <span style={{ color: "red" }}>{time}</span>
            ) : (
              <span style={{ color: "black" }}>{time}</span>
            )}
          </span>
        </div>
        <p className="timer-msg">
          {irish
            ? "Ba cheart go dtógfaidh sé seo 15 nóiméad"
            : "This should take 15 minutes"}
        </p>
      </div>
    </>
  )
}

export default Timer
