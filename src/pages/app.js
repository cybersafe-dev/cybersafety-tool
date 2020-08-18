import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout/layout"
import Profile from "../components/profile/profile"
import Login from "../components/auth/login"
import Signup from "../components/auth/signup"
import PasswordReset from "../components/auth/passwordReset"
import PrivateRoute from "../components/auth/privateRoute"

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app" component={Profile} />
      <Login path="/app/login" />
      <Signup path="/app/signup" />
      <PasswordReset path="/app/passwordreset" />
    </Router>
  </Layout>
)

export default App
