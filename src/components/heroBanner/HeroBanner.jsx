import { Link } from "gatsby"
import React from "react"

function HeroBanner() {
  return (
    <div className="container">
      <div className=" heroBanner">
        <div className="heroBanner-content">
          <h1 className="d-flex heroBanner-content-title">
            <span>We</span>
            <span>
              Design
              <br />
              Deliver
              <br />
              Develop
              <be />
            </span>
            Software Products
          </h1>

          <p className="heroBanner-content-subtitle">
            More than 200 companies have trusted Relevant to scale their
            engineering teams and build web & mobile apps.
          </p>
          <p className="heroBanner-content-core_services"></p>
          <span className="heroBanner-content-services">
            <a>
              <button>TEAM EXTENSION</button>
            </a>
            <a>
              <button>END-TO-END DEVELOPMENT</button>
            </a>
          </span>
        </div>
        <div className="heroBanner-image">
          <img src="https://relevant.software/wp-content/themes/relevant/assets/img/backgrounds/home_bg.png" />
        </div>
      </div>
      <div className="container heroBanner_after">
        <div className="heroBanner_after-content">
          <div className="heroBanner_after-content-item">
            <img
              src="	https://relevant.software/wp-content/uploads/clutch.png"
              alt=""
            />
          </div>
          <div className="heroBanner_after-content-item">
            <img
              src="	https://relevant.software/wp-content/uploads/clutch.png"
              alt=""
            />
          </div>
          <div className="heroBanner_after-content-item">
            <img
              src="	https://relevant.software/wp-content/uploads/clutch.png"
              alt=""
            />
          </div>
          <div className="heroBanner_after-content-item">
            <img
              src="	https://relevant.software/wp-content/uploads/clutch.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
