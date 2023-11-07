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
          Wayne I. Boucher&rsquo;s career included roles at the RAND
          Corporation, the Institute for the Future and The Futures Group, which
          he co-founded in 1971.
        </p>
        <p>
          The Boucher Futures Research Library represents forty-five years of
          compilation and curation. The University of Oxford is grateful to Dr
          Angela Wilkinson for having acquired the collection, which is
          accompanied by a catalogue offering Boucher&rsquo;s descriptive and
          critical annotations. The following is an edited version of the
          Preface to the catalogue, written by the author at the time of the
          sale of the collection in October 2008.
        </p>

        <blockquote>
          <p>
            This catalogue reflects an attempt, spread over some forty-five
            years, to build a serious working library on futures research and
            related subjects. Though limited almost entirely to publications in
            the English language, the coverage of the main approaches, theories,
            methodologies, applications, and appraisals is unusually complete.
            This would seem to be true despite the fact that the coverage tends
            to peter out in more recent years, a result not only of a less
            vigorous acquisition effort on my part, but also of a truly striking
            decline in the output of works that are worth having because they
            contribute something substantially new and valuable to the field.
          </p>
          <br />
          <br />
          <p>
            This is not to say, however, that the collection is balanced, in the
            sense that it provides a fair sampling of the entire futures
            literature: for instance, I have generally ignored publications
            intended to tell the reader what the future will or should be like.
            Most of this literature not only has a half-life of less than three
            months, but it also typically makes highly imperfect use of
            historical data, relies on a dubious methodology or fails to provide
            an adequate description of it, often is created with a special
            interest or special audience in mind, and, as sadly, pays only the
            slightest attention to the systematic development of alternative
            futures or rigorous policy analysis. Included, however, are
            noteworthy bestsellers in this genre, as well as publications on
            subjects that have been particular substantive interests of mine
            professionally from time to time, such as war and peace, financial
            services, governmental innovation, etc.
          </p>
          <br />
          <br />
          <p>
            A special feature of this catalogue is the annotations. I have not
            annotated everything, and many of the annotations are descriptive
            rather than critical, but for the rest I have not hesitated to
            praise or damn without reservation. Most of these comments were
            written especially for this catalogue, but the rest were written
            over the years for a variety of other purposes, including
            off-the-record private communications. For old hands and newcomers
            alike, these comments, now on the record, will I hope prove valuable
            or at least stimulating.
          </p>
          <br />
          <br />
          <p>Wayne I. Boucher</p>
          <br />
          <p>October 2008</p>
        </blockquote>

        <h3>Explore the Boucher Futures Research Library</h3>
        <ul>
          <li>
            <a
              href="/oxfordfutures-gatsby/boucher-futures-research-library---catalogue.xlsx"
              download
            >
              Download the Boucher Futures Research Library catalogue
            </a>{" "}
            (Microsoft Excel 245KB)
          </li>
          <li>
            <Link to="/library">Using the library</Link>
          </li>
        </ul>

        <p>
          A hard copy of Boucher&rsquo;s annotated catalogue, including the full
          Preface, is available for consultation in the Sainsbury Library.
        </p>
      </div>
    </div>
  </Layout>
)

export default BoucherPage

export const Head = () => (
  <Seo title="Boucher Futures Research Library | Oxford Futures Library" />
)
