import React from "react"
import { useLocation } from "@reach/router"

const Layout = ({ children }) => {
  const location = useLocation()

  // Check if the current location is the index page
  const isIndexPage = location.pathname === "/"

  return (
    <div>
      {/* Render the div component only on the index page */}
      {isIndexPage && <div>This div appears only on the index page.</div>}

      {/* Render the children components */}
      {children}
    </div>
  )
}

export default Layout
