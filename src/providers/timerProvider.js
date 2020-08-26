import React from "react"

import { useStopwatch } from "react-timer-hook"

export const TimerStore = React.createContext("")

const TimerProvider = props => {
  const [time, setTime] = React.useState(0)

  let { seconds, minutes } = useStopwatch({
    autoStart: true,
  })

  if (minutes < 10) {
    minutes = `0${minutes}`
  }
  if (seconds < 10) {
    seconds = `0${seconds}`
  }

  React.useEffect(() => {
    setTime(`${minutes}:${seconds}`)
  }, [minutes, seconds])

  return (
    <TimerStore.Provider value={[time, setTime]}>
      {props.children}
    </TimerStore.Provider>
  )
}

export default TimerProvider
