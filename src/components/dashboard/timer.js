import React from "react"

import { TimerStore } from "../../providers/timerProvider"
import Time from "../../images/timer.svg"
import "../../styling/survey/timer.css"

const Timer = () => {
  const [time] = React.useContext(TimerStore)

  return (
    <>
      <div className="timer-container">
        <div className="timer">
          <span>
            {time.split(":")[0] >= 1 ? (
              <p style={{ color: "red" }}> {time}</p>
            ) : (
              <p style={{ color: "black" }}>{time}</p>
            )}
          </span>
          <img src={Time} alt="" className="time-icon" />
        </div>
      </div>
    </>
  )
}

export default Timer
