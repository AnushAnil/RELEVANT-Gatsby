// import React, { useState } from "react"
// import { useEffect } from "react"
// import { Avatar } from "rsuite"

// function CardCarousel() {
//   var cards = [
//     {
//       image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
//       title: "Burgundy Flemming",
//       subtitle: "Advertising",
//     },
//     {
//       image:
//         "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg",
//       title: "Nigel Nigel",
//       subtitle: "Sound & Vision",
//     },
//     {
//       image:
//         "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg",
//       title: "Caspian Bellevedere",
//       subtitle: "Accounting",
//     },
//   ]

//   const [people, setPeople] = useState(cards)
//   const [index, setIndex] = useState(0)

//   useEffect(() => {
//     const lastIndex = people.length - 1
//     if (index < 0) {
//       setIndex(0)
//     }
//     if (index > lastIndex) {
//       setIndex(0)
//     }
//   }, [index, people])

//   useEffect(() => {
//     let slider = setInterval(() => {
//       setIndex(index + 1)
//     }, 5000)
//     return () => {
//       clearInterval(slider)
//     }
//   }, [index])

//   return (
//     <section>
//       {people.map(item => (
//         <div className="card">
//           <Avatar
//             src={item.image}
//             style={{ width: "120px", borderRadius: "20px" }}
//           />
//         </div>
//       ))}
//     </section>
//   )
// }

// export default CardCarousel

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
