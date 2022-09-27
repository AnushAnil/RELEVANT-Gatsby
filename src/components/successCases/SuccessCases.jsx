import React from "react"
import { FaArrowRight } from "react-icons/fa"

function SuccessCases() {
  return (
    <div className="container successCases">
      <h1 className="successCases-title">Success Cases</h1>
      <div className="successCases-case">
        <div className="successCases-case-content">
          <h1 className="successCases-case-content-title">Svenn</h1>
          <h3 className="successCases-case-content-subtitle">
            Reducing paperwork for construction companies
          </h3>
          <p className="successCases-case-content-place">Construction Norway</p>
          <p className="successCases-case-content-viewcase">
            View case <FaArrowRight />
          </p>
        </div>
        <div className="successCases-case-image">
          <img
            src="https://relevant.software/wp-content/webp-express/webp-images/uploads/2020/03/1-12-4-768x449.png.webp"
            alt=""
          />
        </div>
      </div>
      <div className="successCases-case">
        <div className="successCases-case-content">
          <h1 className="successCases-case-content-title">Svenn</h1>
          <h3 className="successCases-case-content-subtitle">
            Reducing paperwork for construction companies
          </h3>
          <p className="successCases-case-content-place">Construction Norway</p>
          <p className="successCases-case-content-viewcase">
            View case <FaArrowRight />
          </p>
        </div>
        <div className="successCases-case-image">
          <img
            src="https://relevant.software/wp-content/webp-express/webp-images/uploads/2020/03/1-12-4-768x449.png.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default SuccessCases
