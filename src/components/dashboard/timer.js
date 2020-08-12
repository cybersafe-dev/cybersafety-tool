import React from "react"

import { TimerStore } from "../../providers/timerProvider"
import Time from "../../images/timer.svg"
import "../../styling/timer.css"

const Timer = () => {
  const [time, setTime] = React.useContext(TimerStore)

  // React.useEffect(() => {
  //   console.log(time)
  // }, [time])

  return (
    <>
      <div className="timer-container">
        <div className="timer">
          <span>{time}</span>

          <img src={Time} alt="" className="time-icon" />
        </div>
      </div>
    </>
  )
}

export default Timer
