import React from "react"
import { navigate } from "gatsby"
import { store } from "../../providers/userProvider"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const [user] = React.useContext(store)
React.useEffect(() => {
    console.log("user data", user)
}, [user])
  if (!user && location.pathname !== `/app/login`) {
    navigate("/app/login")
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute
