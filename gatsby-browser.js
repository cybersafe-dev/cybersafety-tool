import React from "react"

import ResponseProvider from "./src/providers/responseProvider"
import TimerProvider from "./src/providers/timerProvider"
import UserProvider from "./src/providers/userProvider"
import LanguageProvider from "./src/providers/languageProvider"

// highlight-start
export const wrapRootElement = ({ element }) => (
  <LanguageProvider>
    <UserProvider>
      <ResponseProvider>
        <TimerProvider>{element}</TimerProvider>
      </ResponseProvider>
    </UserProvider>
  </LanguageProvider>
)
// highlight-end
