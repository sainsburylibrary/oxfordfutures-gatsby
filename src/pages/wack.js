import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Seo } from "../components/seo"

const WackPage = () => (
  <Layout>
    <div className="container  my-5">
      <div className="container">
        <h1>Pierre Wack Memorial Library</h1>
        <h3>Pierre Wack (1922 - 1997)</h3>
        <p>
          Of all those involved in the genesis and birth of scenario thinking,
          no contribution was more significant than that of pioneering Shell
          executive Pierre Wack.
        </p>

        <p>
          One of the key leaders of the development of corporate scenario
          planning in Shell&rsquo;s renowned Group Planning department,
          Wack&rsquo;s work helped to alert the company&rsquo;s managing
          directors to possible reasons for what became the oil price shocks of
          the 1970s.
        </p>

        <p>
          Valuing insight as much as foresight, Wack&rsquo;s approach coupled
          rigorous analysis and iterative process with a transformative
          imperative, enabling fresh perceptions of what he called the
          &lsquo;macrocosmic&rsquo; context of companies to penetrate and
          reshape the managerial mindset&rsquo;s &lsquo;microcosm&rsquo;.
        </p>

        <p>
          A stint as a senior lecturer at Harvard Business School followed
          Wack&rsquo;s retirement from Shell in 1982, leading to other work such
          as his involvement in the development of the &lsquo;High
          Road&rsquo;/&lsquo;Low Road&rsquo; scenarios for South Africa&rsquo;s
          post-apartheid future. A spiritual and intellectual man, Wack&rsquo;s
          legacy is reflected in the flourishing academic discipline and
          established corporate strategy process that scenario planning is
          today.
        </p>

        <p>
          The Pierre Wack Memorial Library was founded by Pierre&rsquo;s friend
          and colleague Napier Collyns and was first located at the Global
          Business Network offices in The Hague, Netherlands. It incorporates
          Pierre&rsquo;s collection of books, as well as accumulated archival
          materials such as papers, drafts, handwritten notes and published
          writings. The collection was donated to Green Templeton College by
          Napier Collyns in 2005 and includes additional donations from
          colleagues at Shell Group Planning. It now forms part of the Oxford
          Futures Library.
        </p>

        <h3>Explore the Pierre Wack Memorial Library</h3>
        <ul>
          <li>
            <a href="pierre-wack-memorial-library---books.xlsx">
              Download the Pierre Wack Memorial Library catalogue - Books
            </a>{" "}
            (Microsoft Excel, 102KB)
          </li>
          <li>
            <a href="pierre-wack-memorial-library---non-monographs.xlsx">
              Download the Pierre Wack Memorial Library catalogue -
              Non-Monographs
            </a>{" "}
            (Microsoft Excel, 272KB)
          </li>
          <li>
            <Link to="/library">Using the library</Link>
          </li>
        </ul>
        <p>
          A hard copy of the catalogue is available for consultation in the
          Sainsbury Library. Please ask a member of library staff.
        </p>
        <h3>Video: Scenario Planning in Turbulent Times, Pierre Wack</h3>

        <iframe
          title="Scenario Planning in Turbulent Times, Pierre Wack"
          src="https://player.vimeo.com/video/160234786"
          width="500"
          height="377"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </Layout>
)

export default WackPage

export const Head = () => (
  <Seo title="Pierre Wack Memorial Library | Oxford Futures Library" />
)
