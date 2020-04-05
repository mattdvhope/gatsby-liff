import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rgb(239, 239, 239)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >

      <h1 style={{ margin: 0 }}>
        <div style={{
          maxWidth: `50px`,
          marginTop: `-0.6rem`,
          marginBottom: `1.2rem`,
          marginRight: `2%`,
          float: `left`,
          display: `inline`,
          width: `7%`
        }}>
          <Image />
        </div>

        <Link
          to="/"
          style={{
            color: `rgb(45, 49, 121)`,
            textDecoration: `none`,
            fontFamily: `Athiti`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
