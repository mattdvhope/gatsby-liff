import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image1 from "../components/image1"

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
        <div style={{ maxWidth: `50px`, marginBottom: `1.2rem` }}>
          <Image1 />
        </div>

        <Link
          to="/"
          style={{
            color: `rgb(45, 49, 121)`,
            textDecoration: `none`,
            fontFamily: `Athiti`
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
