import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout/layout"
import Profile from "../components/profile/profile"
import Login from "../components/auth/login"
import Signup from "../components/auth/signup"
import PasswordReset from "../components/auth/passwordReset"
import PrivateRoute from "../components/auth/privateRoute"
import UserProvider from "../providers/userProvider"

const App = () => (
  <UserProvider>
    <Layout>
      <Router basepath="/app">
        <PrivateRoute path="/app/profile" component={Profile} />
        <Login path="/app/login" />
        <Signup path="/app/signup" />
        <PasswordReset path="/app/passwordreset" />
      </Router>
    </Layout>
  </UserProvider>
)

export default App
