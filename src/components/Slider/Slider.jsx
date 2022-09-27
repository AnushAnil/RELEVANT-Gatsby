import React from "react"
import Carousel from "react-bootstrap/Carousel"

function Slider() {
  return (
    <Carousel variant="light" className="container mb-5">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://relevant.software/img/video/home/industry-box/fintech/fintech_blk.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://relevant.software/img/video/home/industry-box/fintech/fintech_blk.webp"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  )
}

export default Slider
