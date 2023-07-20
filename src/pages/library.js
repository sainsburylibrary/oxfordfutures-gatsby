import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Seo } from "../components/seo"

const LibraryPage = () => (
  <Layout>
    <div className="container  my-5">
      <div className="container">
        <h1>Using the library</h1>
        {/* Main content */}
        <p>
          From 2014-2020, the Oxford Futures Library was located at Saïd
          Business School&rsquo;s Executive Education campus at Egrove Park.
        </p>
        <p>
          Due to flood damage to the room which housed the collection, and the
          forthcoming evacuation of Egrove Park due to the development of the
          School&rsquo;s{" "}
          <a href="https://www.sbs.ox.ac.uk/about-us/school/global-leadership-centre">
            Global Leadership Centre
          </a>
          , the decision was made in 2020 to relocate it to the Bodleian
          Libraries&rsquo; Collections Storage Facility (CSF).
        </p>
        <p>
          The CSF is an environmentally controlled facility which will help to
          protect the collection and ensure its longevity for future generations
          of researchers.
        </p>
        <p>
          <strong>
            This relocation project was completed in September 2022.
          </strong>
        </p>

        <h2>Who can use the library?</h2>
        <p>
          The Oxford Futures Library is available to futures and scenario
          planning researchers, and everybody who is interested in the work of
          Pierre Wack, Wayne I. Boucher and Art Kleiner. If you are not a member
          of the University of Oxford, you must first{" "}
          <a href="https://www.bodleian.ox.ac.uk/join-the-libraries/apply">
            apply for a Bodleian Reader card
          </a>
          .
        </p>

        <h2>How can I access the Oxford Futures Library?</h2>
        <p>The CSF is a storage facility, not a library.</p>
        <p>
          This means that individual books and/or boxes of archival materials
          must be requested from the CSF to a library in central Oxford. When an
          item has arrived in the library, it will be available for
          consultation. Items are strictly for reference only &ndash; they may
          not be taken away.
        </p>

        <h2>How do I request items?</h2>

        <p>
          Once issued with a Bodleian Reader card, you will have a{" "}
          <a href="https://www.bodleian.ox.ac.uk/services/library-account">
            Bodleian Libraries username and password
          </a>
          .
        </p>
        <p>
          Use these details to log in to our resource discovery tool,{" "}
          <a href="http://solo.bodleian.ox.ac.uk/">SOLO</a>.
        </p>
        <p>
          In SOLO, find the Oxford Futures Library book or archival box which
          you require. You can then request it to be delivered either to the{" "}
          <a href="https://www.bodleian.ox.ac.uk/libraries/business">
            Sainsbury Library
          </a>{" "}
          at Park End Street or to the David Reading Room in the{" "}
          <a href="https://www.bodleian.ox.ac.uk/libraries/weston">
            Weston Library
          </a>{" "}
          on Broad Street. Books may also be requested to additional locations.
        </p>
        <p>Items are usually delivered the next working day (Monday-Friday).</p>
        <p>
          <a href="https://www.bodleian.ox.ac.uk/services/borrow/request">
            Request items to a library
          </a>
        </p>
        <p>
          Please note that only a limited number of items may be requested at a
          time, depending upon the items and your status.&nbsp;
        </p>

        <h2>How will I know what to request?</h2>
        <p>
          Catalogues are available to download as MS Excel files for both the{" "}
          <Link to="/wack">Pierre Wack Memorial Library</Link> and the{" "}
          <Link to="/boucher">Boucher Futures Research Library</Link>.
        </p>
        <p>
          You can browse these catalogues, or search for keywords (e.g. “Shell”)
          using the Ctrl + F function.
        </p>
        <p>
          To request a book, click on the link which is embedded within its
          title. This will take you to the book&rsquo;s record on SOLO, from
          where you can request delivery.
        </p>
        <p>
          <a href="https://www.bodleian.ox.ac.uk/services/borrow/request">
            Request items to a library
          </a>
        </p>
        <p>
          Similarly, next to each archival item (in Column A) is a box number,
          with an embedded link to the SOLO record for that box.
        </p>
        <p>
          A descriptive catalogue, and links to the archival boxes on SOLO, are
          available to download separately for the{" "}
          <Link to="../kleiner">Art Kleiner Archive</Link>.
        </p>

        <h2>How else can I find items?</h2>
        <p>
          It is possible to search directly for the title of a book or an
          archival box (e.g. “Oxford Futures Library. Boucher Futures Research
          Library. Box 62.”) in SOLO.
        </p>
        <p>
          For more information about how to use SOLO, visit our{" "}
          <a href="https://libguides.bodleian.ox.ac.uk/solo/coverage">
            SOLO guide
          </a>
          .
        </p>
        <p>
          Hard copies of catalogues for the Pierre Wack Memorial Library and
          Boucher Futures Research Library are available for consultation in the
          Sainsbury Library on request. Please ask a member of library staff.
        </p>

        <h2>Whom can I ask for help?</h2>
        <p>Please contact the Sainsbury Library:</p>
        <ul className="address">
          <li>Sainsbury Library</li>
          <li>Saïd Business School</li>
          <li>Park End Street</li>
          <li>Oxford</li>
          <li>OX1 1HP</li>
          <li>&nbsp;</li>
          <li>+44 (0) 1865 288880</li>
          <li>
            <a href="mailto:library@sbs.ox.ac.uk">library@sbs.ox.ac.uk</a>&nbsp;
          </li>
        </ul>
        {/* End Main content */}
      </div>
    </div>
  </Layout>
)

export default LibraryPage

export const Head = () => (
  <Seo title="Using the library | Oxford Futures Library" />
)
