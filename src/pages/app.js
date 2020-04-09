import React from "react"
import { Router } from "@reach/router"
// import Layout from "../components/Layout"
import Profile from "../components/Profile"
import Login from "../components/Login"
import PrivateRoute from "../components/PrivateRoute"
const App = () => {
  return (
      <Router basepath="/app">
        <PrivateRoute path="/profile" component={Profile} />
        <Login path="/login" />
      </Router>
  )
}
export default App