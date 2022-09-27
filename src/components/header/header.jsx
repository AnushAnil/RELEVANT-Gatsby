import { Link } from "gatsby"
import React from "react"

function header({ siteTitle }) {
  function show() {
    let hamburger = document.querySelector(".hamburger")
    let navMenu = document.querySelector(".navbar-links")
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
  }
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/">
          <div className="navbar-logo">{siteTitle}</div>
        </Link>
        <div className="hamburger" onClick={show}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className="navbar-links">
          <a href="#">Services</a>
          <a href="#">Pricing</a>
          <a href="#">Portfolio</a>
          <a href="#">Industries</a>
          <a href="#">Company</a>
          <a href="#">Insights</a>
          <a href="#" className="get-in-touch">
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  )
}

export default header
