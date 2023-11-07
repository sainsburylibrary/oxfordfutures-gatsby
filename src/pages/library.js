import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Seo } from "../components/seo"

const LibraryPage = () => (
  <Layout>
    <div className="container my-5">
      <div className="container">
        <h1>Using the library</h1>
        {/* Main content */}
        <p>
          From 2014-2020, the Oxford Futures Library was located at Saïd
          Business School&rsquo;s Executive Education Centre at Egrove Park in
          Kennington.
        </p>
        <p>
          Due to flood damage to the room which housed the collection, and the
          development of Saïd Business School&rsquo;s{" "}
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
        {/* Accordion */}
        <div className="accordion accordion-flush" id="accordionFlushLibrary">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Who can use the library?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              // data-bs-parent="#accordionFlushLibrary"
            >
              <div className="accordion-body">
                <p>
                  The Oxford Futures Library is available to futures and
                  scenario planning researchers, and everybody who is interested
                  in the work of Pierre Wack, Wayne I. Boucher and Art Kleiner.
                  If you are not a member of the University of Oxford, you must
                  first{" "}
                  <a href="https://www.bodleian.ox.ac.uk/join-the-libraries/apply">
                    apply for a Bodleian Reader card
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                How can I access the Oxford Futures Library?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              // data-bs-parent="#accordionFlushLibrary"
            >
              <div className="accordion-body">
                <p>The CSF is a storage facility, not a library.</p>
                <p>
                  This means that individual books and/or boxes of archival
                  materials must be requested from the CSF to a library in
                  Oxford. When an item has arrived in the library, it will be
                  available for consultation. Items are strictly for reference
                  only &ndash; they may not be taken away.
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                How do I request items?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              // data-bs-parent="#accordionFlushLibrary"
            >
              <div className="accordion-body">
                {" "}
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
                  In SOLO, find the Oxford Futures Library book or archival box
                  which you require. You can then request it to be delivered to
                  the{" "}
                  <a href="https://www.bodleian.ox.ac.uk/libraries/business">
                    Sainsbury Library
                  </a>{" "}
                  at Park End Street. Books may also be requested to additional
                  locations.
                </p>
                <p>
                  Items are usually delivered the next working day
                  (Monday-Friday).
                </p>
                <p>
                  <a href="https://www.bodleian.ox.ac.uk/services/borrow/request">
                    Request items to a library
                  </a>
                </p>
                <p>
                  Please note that only a limited number of items may be
                  requested at a time, depending upon the items and your
                  status.&nbsp;
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                How will I know what to request?
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              // data-bs-parent="#accordionFlushLibrary"
            >
              <div className="accordion-body">
                <p>
                  Catalogues are available to download as MS Excel files for
                  both the <Link to="/wack">Pierre Wack Memorial Library</Link>{" "}
                  and the{" "}
                  <Link to="/boucher">Boucher Futures Research Library</Link>.
                </p>
                <p>
                  You can browse these catalogues, or search for keywords (e.g.
                  “Shell”) using the Ctrl + F function.
                </p>
                <p>
                  To request a book, click on the link which is embedded within
                  its title. This will take you to the book&rsquo;s record on
                  SOLO, from where you can request delivery.
                </p>
                <p>
                  <a href="https://www.bodleian.ox.ac.uk/services/borrow/request">
                    Request items to a library
                  </a>
                </p>
                <p>
                  Similarly, next to each archival item (in Column A) is a box
                  number, with an embedded link to the SOLO record for that box.
                </p>
                <p>
                  A descriptive catalogue, and links to the archival boxes on
                  SOLO, are available to download separately for the{" "}
                  <Link to="../kleiner">Art Kleiner Archive</Link>.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
              >
                How else can I find items?
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              className="accordion-collapse collapse"
              // data-bs-parent="#accordionFlushLibrary"
            >
              <div className="accordion-body">
                <p>
                  It is possible to search directly for the title of a book or
                  an archival box (e.g. “Oxford Futures Library. Boucher Futures
                  Research Library. Box 62.”) in SOLO.
                </p>
                <p>
                  For more information about how to use SOLO, visit our{" "}
                  <a href="https://libguides.bodleian.ox.ac.uk/solo/coverage">
                    SOLO guide
                  </a>
                  .
                </p>
                <p>
                  Hard copies of catalogues for the Pierre Wack Memorial Library
                  and Boucher Futures Research Library are available for
                  consultation in the Sainsbury Library on request. Please ask a
                  member of library staff.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSix"
                aria-expanded="false"
                aria-controls="flush-collapseSix"
              >
                Whom can I ask for help?
              </button>
            </h2>
            <div
              id="flush-collapseSix"
              className="accordion-collapse collapse"
              // data-bs-parent="#accordionFlushLibrary"
            >
              <div className="accordion-body">
                {" "}
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
                    <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#108;&#105;&#98;&#114;&#97;&#114;&#121;&#64;&#115;&#98;&#115;&#46;&#111;&#120;&#46;&#97;&#99;&#46;&#117;&#107;">
                      &#108;&#105;&#98;&#114;&#97;&#114;&#121;&#64;&#115;&#98;&#115;&#46;&#111;&#120;&#46;&#97;&#99;&#46;&#117;&#107;
                    </a>
                    &nbsp;
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End Accordion */}

        {/* = OLD - Non-accordian content =
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
        </ul> */}
        {/* End Main content */}
      </div>
    </div>
  </Layout>
)

export default LibraryPage

export const Head = () => (
  <Seo title="Using the library | Oxford Futures Library" />
)
