import React from "react"

import { TimerStore } from "../../providers/timerProvider"
import Time from "../../images/timer.svg"
import "../../styling/survey/timer.css"

const Timer = () => {
  const [time, start] = React.useContext(TimerStore)

  React.useEffect(() => {
    start()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div className="timer-container">
        <div className="timer">
          <span>
            {time.split(":")[0] >= 10 ? (
              <span style={{ color: "red" }}>{time}</span>
            ) : (
              <span style={{ color: "black" }}>{time}</span>
            )}
          </span>
          <img src={Time} alt="" className="time-icon" />
        </div>
      </div>
    </>
  )
}

export default Timer
