import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => {
  return (
      <main>{children}</main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
