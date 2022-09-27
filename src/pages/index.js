import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/main.scss"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroBanner from "../components/heroBanner/HeroBanner"
import SuccessCases from "../components/successCases/SuccessCases"
import ContactCard from "../components/contactCard/ContactCard"
import Slider from "../components/Slider/Slider"
import Expertise from "../components/expertise/Expertise"
import Footer from "../components/footer/Footer"
import Industries from "../components/industries/Industries"
import CardCarousel from "../components/cardCarousel/CardCarousel"
import Accordian from "../components/accordian/Accordian"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroBanner />
    <CardCarousel />
    <SuccessCases />
    <Industries />
    <Expertise />
    <ContactCard />
    <Accordian />
    <Footer />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
