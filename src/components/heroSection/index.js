// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./style.css"
const HeroSection = ({ heroSectionData }) => {
  console.log("heroSectionData", heroSectionData)
  return (
    <div
      className="hero-container"
      style={{ backgroundImage: heroSectionData.bgImage }}
    >
      <div class="hero-title-container">
        <h2>{heroSectionData.title}</h2>
      </div>
      <div class="hero-subtitle-container">
        <p>{heroSectionData.subTitle}</p>
      </div>
    </div>
  )
}

HeroSection.propTypes = {
  siteTitle: PropTypes.string,
}

HeroSection.defaultProps = {
  siteTitle: ``,
}

export default HeroSection
