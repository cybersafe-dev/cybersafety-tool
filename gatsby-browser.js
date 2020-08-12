import React from "react"

import ResponseProvider from "./src/providers/responseProvider"
import TimerProvider from "./src/providers/timerProvider"

// highlight-start
export const wrapRootElement = ({ element }) => (
  <ResponseProvider>
    <TimerProvider>{element}</TimerProvider>
  </ResponseProvider>
)
// highlight-end
