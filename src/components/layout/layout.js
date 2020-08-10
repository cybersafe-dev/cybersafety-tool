import React from "react"
import PropTypes from "prop-types"
import ResponseProvider from "../../providers/responseProvider"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <main>
      <ResponseProvider>{children}</ResponseProvider>
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
