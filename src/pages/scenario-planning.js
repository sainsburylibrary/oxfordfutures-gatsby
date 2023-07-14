import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Seo } from "../components/seo"

const ScenarioPage = () => (
  <Layout>
    <div className="container  my-5">
      <div className="container">
        {/* Main content */}
        <h1 class="entry-title">Scenario Planning</h1>
        <blockquote>
          <p>
            Scenario planning saw its origins with the possibility of nuclear
            war. It borrowed the term &lsquo;scenarios&rsquo; from the arts, but
            considered the serious implications of &lsquo;what if&rsquo; in one
            of the most terrifying possibilities of human history. Of course,
            the WW2 quantum jump in the practice of scenario planning built on
            many precedents, notably in France with the work of Gaston Berger.
            For a while, during and after WW2, scenario planning was used not
            only for military, but also for public policy purposes in both
            France and the US. In the US, institutions such as the RAND
            Corporation, the Hudson Institute (where Herman Kahn wrote his
            famous book and gave rise to the &lsquo;thinking the
            unthinkable&rsquo; phrase), The Institute for the Future and The
            Futures Group further developed this thinking; while in France it
            was mostly the French government (and government-controlled firms)
            that pursued this practice.
          </p>
          <br />
          <br />
          <p>
            It is only later that the practice was tried out in companies such
            as Royal Dutch/Shell and GE; and EDF, the French Railways and Elf.
          </p>
          <br />
          <br />
          <p>
            The hiring of Pierre Wack from Shell France into Group Planning
            brought together aspects of the French and of the American
            approaches into a very potent combination. Pierre&rsquo;s knowledge
            of Eastern mindfulness also brought those considerations to Western
            corporate mindsets. Wayne Boucher was a key figure on the US side,
            in RAND, The Institute for the Future and The Futures Group. It is
            these two histories that are recorded in the two collections of our
            library.
          </p>
          <br />
          <br />
          <p>
            Scenarios were always a practice-led field. It is our role as
            scholars to determine whether the practices &lsquo;work&rsquo; well,
            or not; on what basis this is ascertained; what the difference
            between effectiveness or lack of it consists of; and how rigorous
            research can help the practice become better and avoid being
            &lsquo;bad&rsquo;.
          </p>
          <br />
          <br />
          <p>
            Since 9/11 we have seen a steep increase in the production of
            scholarly work on scenario planning. Currently, some 200 academic
            papers are published on scenario planning every year, and there are
            several hundred books whose titles include &ldquo;scenario
            planning&rdquo;.
          </p>
          <br />
          <br />
          <p>
            This library is of help for scholars studying scenario planning
            &mdash; there are many within the University, in fields such as
            politics, immigration, environmental studies, geography, and, of
            course, the business school. We strive to compare scenarios with
            other disciplines &mdash; for example in the Oxford Futures Forum;
            to research scenario practices and teach them &mdash; in the MBA and
            Diploma programmes, and in the Oxford Scenarios Programme. A steady
            stream of publications has been produced, and an Oxford Scenarios
            Approach has emerged from this work. Our hope is that the Oxford
            Futures Library will further catalyse work on scenario planning in
            Oxford.
          </p>
          <br />
          <br />
          <p>
            Rafael Ramírez
            <br />
            Oxford, 21st April 2014
          </p>
        </blockquote>
        <p>
          <a href="https://www.sbs.ox.ac.uk/about-us/people/rafael-ramirez">
            Rafael Ramírez
          </a>
          &nbsp; is Director of the Oxford Scenarios Programme and Professor of
          Practice at the University of Oxford.
        </p>
        {/* End Main content */}
      </div>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default ScenarioPage

export const Head = () => (
  <Seo title="Scenario Planning | Oxford Futures Library" />
)
