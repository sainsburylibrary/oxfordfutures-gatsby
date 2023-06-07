import * as React from "react"

import Layout from "../components/layout"
import { Seo } from "../components/seo"

const IndexPage = () => (
  <Layout>
    <section className="py-5 text-left container">
      <div className="row">
        <p>
          The Oxford Futures Library is part of the collection of the{" "}
          <a href="https://www.bodleian.ox.ac.uk/libraries/business">
            Sainsbury Library
          </a>
          , the University of Oxford&rsquo;s dedicated Business and Management
          library.
        </p>
        <p>
          It houses the{" "}
          <a href="pierre-wack-memorial-library/index.html">
            Pierre Wack Memorial Library
          </a>{" "}
          and the{" "}
          <a href="boucher-futures-research-library/index.html">
            Boucher Futures Research Library
          </a>
          , gifted to Green Templeton College by Napier Collyns and Dr Angela
          Wilkinson. Green Templeton College and Saïd Business School
          acknowledge their generous support in bringing these collections to
          Oxford.
        </p>
        <p>
          These two significant and complementary collections consist of nearly
          6,000 items relating to futures and{" "}
          <a href="welcome/scenario-planning/index.html">scenario planning</a>{" "}
          practice and research. Together, they provide a unique and valuable
          insight into the nascence and continuing resonance of the discipline
          and its architects.
        </p>
        <p>
          The library also includes the{" "}
          <a href="art-kleiner-archive/index.html">Art Kleiner Archive</a>, a
          collection of letters, reports and other documents which was donated
          by renowned author, journalist and editorial consultant Art Kleiner to
          Green Templeton College, and deposited in the Oxford Futures Library.
          Green Templeton College and Saïd Business School are grateful for the
          generous donation of this distinct archive.
        </p>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Testimonials
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="card">
                  <div className="card-body">
                    <blockquote>
                      <p>
                        Recently I spent two full days in the Oxford Futures
                        Library to conduct research. This library is
                        indispensable for all scenario planners, business
                        strategists and also, I might add, for those working on
                        organizational studies such as behaviour, culture and
                        climate. During my visit I focused my research on how
                        companies like Shell organized past scenario workshops,
                        questioning whether they took into consideration ethical
                        issues during the process, as well as, on the
                        institutionalization of scenario planning in companies
                        as a means to contribute to an ethical culture. Finally,
                        I looked into Pierre Wack&rsquo;s archives where unique
                        content on scenario planning can be found and where I
                        consulted letters, articles and early drafts and notes
                        from Peter Senge, Kees van der Heijden and Napier
                        Collyns. I just wish that I had had more time to dig
                        deeper into Pierre Wack&rsquo;s archives and move on to
                        Art Kleiner&rsquo;s archives, which I believe are also
                        important for my work due to Kleiner&rsquo;s
                        contributions on corporate culture, business ethics and
                        leadership.
                      </p>
                      <p>
                        I would hope to come back soon to Oxford and arrange to
                        spend more time in the Oxford Futures Library. This is
                        an important and fundamental resource for both early
                        stage and experienced scenario planners and also, for
                        students, professionals and researchers in general,
                        anyone involved in scenario planning and future studies.
                      </p>
                    </blockquote>
                    <p className="card-text">
                      <strong>Rodrigo Dal Borgo</strong>,{" "}
                      <em>
                        Marie Sklodowska-Curie Fellow, PhD candidate and
                        Assistant Researcher,
                        <br />
                        Centre for Applied Ethics, University of Deusto, Bilbao
                      </em>
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <blockquote>
                      <p>
                        Pierre Wack Library is a place where historians can find
                        Wack&rsquo;s personal papers and his personal library.
                        The archive constitutes a unique tool which allows us to
                        approach the way Pierre Wack thought and how he
                        elaborated his method: scenario planning. So, from a
                        methodological point of view, the Pierre Wack Library is
                        an asset supporting the importance of the biographical
                        genre in history research.
                      </p>
                      <p>
                        Moreover, for social scientists and human scientists,
                        the Pierre Wack Library is a fabulous window on our
                        recent business and political history.
                      </p>
                    </blockquote>
                    <p className="card-text">
                      <strong>Muriel Le Roux</strong>,{" "}
                      <em>Historian of science, technology and innovation</em>
                      <br />
                      IHMC, Paris
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <blockquote>
                      <p>
                        In my dissertation I analyze the concept of
                        &lsquo;plausibility&rsquo; in scenario planning. This
                        requires me to look into both practice-led contributions
                        and scholarly literature on scenarios.
                      </p>
                      <p>
                        Oftentimes this literature is spread across different
                        libraries and online databases. The Oxford Futures
                        Library allowed me to go back to early references to
                        plausibility used in correspondences and notes of Pierre
                        Wack and other futurists. My research benefitted from
                        browsing &lsquo;central readings&rsquo; as well as
                        practitioners&rsquo; reports in the library.
                      </p>
                    </blockquote>
                    <p className="card-text">
                      <strong>Ricarda Scheele</strong>,{" "}
                      <em>
                        MSc, PhD candidate, Member of Scientific Staff, ZIRIUS
                        <br />
                        Stuttgart Research Center for Interdisciplinary Risk and
                        Innovation Studies, University of Stuttgart
                      </em>
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <blockquote>
                      <p>
                        The Pierre Wack Memorial Library (established by Napier
                        Collyns and Kees van der Heijden with a partnership
                        between Green Templeton College and the Saïd Business
                        School at the University of Oxford) was officially
                        opened in May 2014 as part of the Oxford Futures
                        Library. The vast collection of documents and resources
                        it contains were essential to the research and writing
                        of my latest book,{" "}
                        <em>
                          Foundations of Scenario Planning: The Story of Pierre
                          Wack
                        </em>
                        . The other collections in the library (the Boucher
                        Futures Library and the Art Kleiner Archive) contain
                        many additional resources that will be of great interest
                        to anyone studying scenarios or the history of Futures
                        as a discipline.
                      </p>
                    </blockquote>
                    <p className="card-text">
                      <strong>Thomas J. Chermack</strong>,{" "}
                      <em>
                        Professor of Organizational Learning, Performance and
                        Change
                        <br />
                        Colorado State University, USA
                      </em>
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <blockquote>
                      <p>
                        I first discovered the Oxford Futures Library at Egrove
                        Park when I visited Professor Rafael Ramírez in
                        July-August 2017.
                      </p>
                      <p>
                        At that time, I was greatly in need of more references
                        and historical accounts of how scenario planning had
                        emerged and evolved since the 1950&rsquo;s.
                      </p>
                      <p>
                        My &lsquo;quest&rsquo; was motivated by my intention to
                        build my own path and develop my own version of scenario
                        planning so that it would align with the expectations of
                        the organizations I had been working with in
                        Switzerland.
                      </p>
                      <p>
                        What I found in the Futures Library exceeded my
                        expectations. Not only did I discover unique, original
                        work by Pierre Wack, but I also had access to a wealth
                        of general management literature that I would have
                        otherwise not necessarily connected with scenario
                        planning.
                      </p>
                      <p>
                        Let&rsquo;s face it too: there is no other place for the
                        Futures Library than at the Saïd Business School, it
                        acts as a hub for visiting scholars such as myself as
                        well as the ever growing number of talented individuals
                        who attend the Oxford Scenarios Programme.
                      </p>
                      <p>
                        The Futures Library is a must see for anyone who has the
                        drive and passion to contribute to the field of scenario
                        planning.
                      </p>
                    </blockquote>
                    <p className="card-text">
                      <strong>Thomas Gauthier</strong>,{" "}
                      <em>
                        Professor of Strategy
                        <br />
                        Haute école de gestion de Genève and Emlyon Business
                        School
                      </em>
                    </p>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const Head = () => <Seo />
