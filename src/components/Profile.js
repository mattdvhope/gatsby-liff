import React from "react"
import { navigate } from "gatsby"
import { logout } from "../services/auth"

const Profile = () => (
  <>
    <h1>Your profile</h1>
    <ul>
      <li>Name: Your name will appear here</li>
      <li>E-mail: And here goes the mail</li>
			<a
        to="/"
        onClick={event => {
          event.preventDefault()
          logout(() => navigate(`/app/login`))
        }}
      >
        Logout
      </a>



    </ul>
  </>
)
export default Profile