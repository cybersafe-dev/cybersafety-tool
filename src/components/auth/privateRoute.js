import React, { Component } from "react"
import { navigate } from "gatsby"
import { store } from "../../providers/userProvider"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const [user] = React.useContext(store)

  if (!user && location.pathname !== `/app/login`) {
    navigate("/app/login")
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute
