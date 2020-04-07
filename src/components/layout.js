/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

// let loc = new URL(window.location)
// console.log(loc.pathname)



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          textAlign: `center`,
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
          fontFamily: `Athiti`
        }}
      >
        <main>{children}</main>
        <footer style={{ color: `rgb(139, 195, 74)`}}>
          © {new Date().getFullYear()} สร้างโดย
          {` `}
          <a href="https://www.cityenglishproject.com"
             style={{ color: `rgb(45, 49, 121)`, textDecoration: `none`}}>
            CEP
          </a>
        </footer>
      </div>
      <link href="https://fonts.googleapis.com/css?family=Athiti|Chonburi|Kanit|Maitree|Prompt|Sriracha|Taviraj|Trirong|Josefin+Sans" rel="stylesheet" />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
