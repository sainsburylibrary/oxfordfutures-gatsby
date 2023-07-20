import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Seo } from "../components/seo"

const BoucherPage = () => (
  <Layout>
    <div className="container  my-5">
      <div className="container">
        <h1>Boucher Futures Research Library</h1>
        <p>
          The Art Kleiner Archive is a collection of letters, reports and other
          documents which was donated by renowned author, journalist and
          editorial consultant Art Kleiner to Green Templeton College, and
          deposited in the Oxford Futures Library.
        </p>

        <p>
          The collection consists of original publications and correspondence
          between prominent scenario planners as well as annotated drafts of
          Kleiner&rsquo;s work, amassed during the writing of{" "}
          <em>The Age of Heretics</em> (1996) and
          <em>The Fifth Discipline Fieldbook</em> (1994), which Kleiner
          developed with Peter Senge and others. Many of the items within this
          collection directly reference Pierre Wack, Shell and scenario
          planning, and as such, provide a valuable complement to the{" "}
          <Link to="/wack">Pierre Wack Memorial Library</Link> and{" "}
          <Link to="/boucher">Boucher Futures Research Library</Link>.
        </p>

        <p>
          Kleiner&rsquo;s other distinguished publications include{" "}
          <em>
            Who Really Matters: The Core Group Theory of Power, Privilege, and
            Success
          </em>{" "}
          (2003), <em>The Dance of Change</em> (1999) and{" "}
          <em>Schools That Learn</em> (2000). From 2005-2020, he served as
          Editor-in-Chief of <em>strategy+business</em> magazine.
        </p>

        <p>
          Green Templeton College and Saïd Business School are grateful for the
          generous donation of this distinct archive.
        </p>

        <h3>Explore the Art Kleiner Archive</h3>
        <ul>
          <li>
            <a href="art-kleiner-catalogue.pdf">
              Download The Art Kleiner Archive: A Descriptive Catalogue
            </a>{" "}
            (PDF, 1.2MB)
          </li>
          <li>
            <a href="links-to-solo-for-the-art-kleiner-archive.xlsx">
              Download Links to SOLO for the Art Kleiner Archive
            </a>{" "}
            (Microsoft Excel, 20KB)
          </li>
          <li>
            <a href="../use-of-the-library/index.html">Using the library</a>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default BoucherPage

export const Head = () => (
  <Seo title="Boucher Futures Research Library | Oxford Futures Library" />
)
