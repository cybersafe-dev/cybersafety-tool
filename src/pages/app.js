import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout/layout"
import Profile from "../components/profile/profile"
import Login from "../components/auth/login"

const App = () => (
    <Layout>
        <Router>
            <Profile path="/app/profile" />
            <Login path="/app/login" />
        </Router>
    </Layout>
)

export default App