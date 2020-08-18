import React from "react"

import ResponseProvider from "./src/providers/responseProvider"
import TimerProvider from "./src/providers/timerProvider"
import UserProvider from "./src/providers/userProvider"
//import "firebase/auth";
//import "firebase/firestore";

// highlight-start
export const wrapRootElement = ({ element }) => (
  <UserProvider>
    <ResponseProvider>
      <TimerProvider>{element}</TimerProvider>
    </ResponseProvider>
  </UserProvider>
)
// highlight-end
