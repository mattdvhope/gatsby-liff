import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ImageLogo from "../components/image_logo"

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
        padding: `0.7rem 1.1rem`,
        textAlign: `center`
      }}
    >

      <div style={{
        width: `52px`,
        position: `relative`,
        right: `11px`,
        bottom: `7px`,
        float: `left`,
      }}>
        <ImageLogo />
      </div>

      <h1 style={{
            margin: 0,
            color: `rgb(45, 49, 121)`,
            textDecoration: `none`,
            fontFamily: `Athiti`,
      }}>
        {siteTitle}
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
