import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import "./layout.scss"

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
    <div className="container-fluid p-0">
      {/* <!-- Background image --> */}
      <div className="p-5 text-left bg-image">
        <div>
          <div className="d-flex justify-content-left align-items-left h-100">
            <div>
              <h1 className="site-title">
                <a href="index.html" title="Oxford Futures Library" rel="home">
                  Oxford Futures <span>Library</span>
                </a>
              </h1>
              <h2 className="site-description">
                Sainsbury Library, Saïd Business School
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Background image --> */}
      <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
