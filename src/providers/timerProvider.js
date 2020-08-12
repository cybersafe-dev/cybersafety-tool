import React from "react"
import { useStopwatch } from "react-timer-hook"
export const TimerStore = React.createContext("")

const TimerProvider = props => {
  const [time, setTime] = React.useState(0)

  const { seconds, minutes } = useStopwatch({
    autoStart: true,
  })

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
