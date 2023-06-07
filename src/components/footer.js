import * as React from "react"

const Footer = () => {
  return (
    <footer id="colophon" class="site-footer" role="contentinfo">
      <div className="site-info">
        Website &copy;
        {new Date().getFullYear()}{" "}
        <a href="https://www.bodleian.ox.ac.uk/libraries/business/?ref=oxfordfutures">
          Sainsbury Library
        </a>
        ,{" "}
        <a href="https://www.sbs.ox.ac.uk/?ref=oxfordfutures">
          Saïd Business School
        </a>{" "}
        and Contributors.&nbsp;|&nbsp;
        <a href="https://www.sbs.ox.ac.uk/about-us/website-policies">
          Accessibility & Privacy Policies
        </a>
      </div>
    </footer>
  )
}

export default Footer
