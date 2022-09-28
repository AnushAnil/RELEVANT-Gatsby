import React from "react"
import Carousel from "react-bootstrap/Carousel"

function CardCarousel() {
  return (
    <>
      <h1 className="text-center mt-5 mb-5">Testimonials</h1>
      <Carousel variant="dark">
        <Carousel.Item style={{ height: "500px" }} interval={2000}>
          <div
            className="profile-header"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "30px",
            }}
          >
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              style={{
                width: "100px",
                borderRadius: "50%",
                marginBottom: "10px",
              }}
            />
            <div>
              <b>Facebook, </b>Anush
            </div>
            <div style={{ marginTop: "20px" }}>
              <p>
                This section contains the clients feedback for their product.
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item style={{ height: "500px" }} interval={2000}>
          <div
            className="profile-header"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "30px",
            }}
          >
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              style={{
                width: "100px",
                borderRadius: "50%",
                marginBottom: "10px",
              }}
            />
            <div>
              <b>Facebook, </b>Anush
            </div>
            <div style={{ marginTop: "20px" }}>
              <p>
                This section contains the clients feedback for their product.
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item style={{ height: "500px" }} interval={2000}>
          <div
            className="profile-header"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "30px",
            }}
          >
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              style={{
                width: "100px",
                borderRadius: "50%",
                marginBottom: "10px",
              }}
            />
            <div>
              <b>Facebook, </b>Anush
            </div>
            <div style={{ marginTop: "20px" }}>
              <p>
                This section contains the clients feedback for their product.
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default CardCarousel
