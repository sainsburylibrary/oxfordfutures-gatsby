import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Seo } from "../components/seo"

const ContactPage = () => (
  <Layout>
    <div className="container  my-5">
      <div className="container">
        {/* Main content */}

        <div className="card moved">
          <div class="card-body">
            <h5 className="card-title">The Oxford Futures Library has moved</h5>
            <p className="card-text">
              The Oxford Futures Library is now available for consultation,
              having been relocated to the Bodleian Libraries&rsquo; Collections
              Storage Facility (CSF).
            </p>
            <p className="card-text">
              Please see <Link to="/library">Using the library</Link> for
              details.
            </p>
            <p className="card-text">
              Questions can be sent to{" "}
              <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#108;&#105;&#98;&#114;&#97;&#114;&#121;&#64;&#115;&#98;&#115;&#46;&#111;&#120;&#46;&#97;&#99;&#46;&#117;&#107;">
                &#108;&#105;&#98;&#114;&#97;&#114;&#121;&#64;&#115;&#98;&#115;&#46;&#111;&#120;&#46;&#97;&#99;&#46;&#117;&#107;
              </a>
              .
            </p>
          </div>
        </div>

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
          </li>
        </ul>

        <div className="googlemaps">
          <iframe
            className="googlemaps-embed"
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.894758274928!2d-1.270570684211867!3d51.75324797967635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a30bf81719%3A0xc14083fadaefcc40!2sSainsbury%20Library%20at%20the%20Sa%C3%AFd%20Business%20School!5e0!3m2!1sen!2suk!4v1663861871424!5m2!1sen!2suk"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <br />
          <small>
            <a href="https://www.google.com/maps/place/Sainsbury+Library+at+the+Saïd+Business+School/@51.753248,-1.2705707,17z/data=!3m1!4b1!4m6!3m5!1s0x4876c6a30bf81719:0xc14083fadaefcc40!8m2!3d51.753248!4d-1.268382!16s%2Fg%2F12vsvx2hz?hl=en-GB&shorturl=1">
              View Larger Map
            </a>
          </small>
        </div>

        {/* End Main content */}
      </div>
    </div>
  </Layout>
)

export default ContactPage

export const Head = () => <Seo title="Contact us | Oxford Futures Library" />
