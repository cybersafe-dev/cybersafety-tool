import React from "react"
import { useStopwatch } from "react-timer-hook"
import Time from "../images/timer.svg"
import "../styling/timer.css"

const Timer = () => {
  const { seconds, minutes } = useStopwatch({
    autoStart: true,
  })

  return (
    <>
      <div className="timer-container">
        <div className="timer">
          <span>{minutes}</span>:<span>{seconds}</span>
          <img src={Time} alt="" className="time-icon" />
        </div>
      </div>
    </>
  )
}

export default Timer
