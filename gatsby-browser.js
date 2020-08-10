import React from "react"

import ResponseProvider from "./src/providers/responseProvider"

// highlight-start
export const wrapRootElement = ({ element }) => (
    <ResponseProvider>{element}</ResponseProvider>
)
// highlight-end
