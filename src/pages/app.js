import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout/layout"
import Profile from "../components/profile/profile"
import Login from "../components/auth/login"
import Signup from "../components/auth/signup"
import PasswordReset from "../components/auth/passwordReset"
import Confirmation from "../components/profile/confirmation"
import PrivateRoute from "../components/auth/privateRoute"
import Header from "../components/header/header"
import NotFound from "../pages/404"

const App = () => (
  <Layout>
    <Header />
    <Router>
      <PrivateRoute path="/app" component={Profile} />
      <Login path="/app/login" />
      <Signup path="/app/signup" />
      <PasswordReset path="/app/passwordreset" />
      <Confirmation path="/app/confirmation" />
      <NotFound default />
    </Router>
  </Layout>
)

export default App
