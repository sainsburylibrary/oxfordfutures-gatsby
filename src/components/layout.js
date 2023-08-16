import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import { withPrefix } from "gatsby"

import Navbar from "./navbar"
import Footer from "./footer"
import "./layout.scss"

const Layout = ({ children }) => {
  const location = useLocation()

  // Added import withPrefix and changed line below to get info box to make alert-warning appear on GitHub Pages
  // If not deploying to GH Pages, remove import line and change:
  // === withPrefix("/")
  // to:
  // === "/"
  const isIndexPage = location.pathname === withPrefix("/")

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
      <header>
        <div>
          {/* Render the div component only on the index page */}
          {isIndexPage && (
            <div
              className="alert alert-warning alert-dismissible fade show position-relative top-0 start-0"
              role="alert"
            >
              <p>
                The Oxford Futures Library is now available for consultation,
                having been relocated to the Bodleian Libraries&rsquo;
                Collections Storage Facility (CSF).
                <br />
                Please see <Link to="/library">Using the library</Link> for
                details.
              </p>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          )}
        </div>
        {/* <!-- Background image --> */}
        <div className="p-5 text-left bg-image">
          <div>
            <div className="d-flex justify-content-left align-items-left h-100">
              <div>
                <h1 className="site-title">
                  <Link to="/" className="navbar-brand" href="#">
                    Oxford Futures <span>Library</span>
                  </Link>
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
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
