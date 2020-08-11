import React from "react"
import { useStopwatch } from "react-timer-hook"

import "../styling/timer.css"

const Timer = () => {
  const { seconds, minutes, start } = useStopwatch({
    autoStart: true,
  })

  return (
    <>
      <div className="timer-container">
        <div className="timer">
          <span>{minutes}</span>:<span>{seconds}</span>
        </div>

        <button className="timer-btn" onClick={start}>
          trigger by opening dashboard?
        </button>
      </div>
    </>
  )
}

export default Timer
