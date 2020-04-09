import React from "react"
import { Router } from "@reach/router"
import Profile from "../components/Profile"
import Login from "../components/Login"
import PrivateRoute from "../components/PrivateRoute"
const App = () => {
  return (
    <Router basepath="/app">
{/* <PrivateRoute path="/profile" component={Profile} /> JSX Comment */}
      <Profile path="/profile" />
      <Login path="/login" />
    </Router>
  )
}
export default App