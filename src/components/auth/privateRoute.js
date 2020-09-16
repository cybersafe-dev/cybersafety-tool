import React from "react"
import { navigate } from "gatsby"
import { userStore } from "../../providers/userProvider"
import Reporting from "../reporting/reporting"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const [user] = React.useContext(userStore)

  // user debug log here
  // React.useEffect(() => {
  //   console.log("user data", user)
  // }, [user])

  if (!user && location.pathname !== `/app/login`) {
    navigate("/app/login")
    return null
  }

  if (user.isAdmin) {
    return <Reporting {...rest} />
  } else {
    return <Component {...rest} />
  }
}

export default PrivateRoute
