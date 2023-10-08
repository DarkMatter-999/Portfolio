import React from 'react'

import PcImage from "./PcImage.jsx"

import "./MainPage.css"

const MainPage = () => {
  return (
    <div className="MainPage">
      <section className="Intro">
      <PcImage />
      <div className="introText">
        <div className="introHeading">
          Hello! I am Lakshyajeet.
        </div>
        <div className="introSubText">
           I am a passionate and driven Computer Science and Engineering student with a strong foundation in both theory and practical application.
        </div>
      </div>
      </section>
        <section className="section">Section 2</section>
        <section className="section">Section 3</section>
    </div> 
  )
}

export default MainPage
