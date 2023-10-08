import React from 'react'
import GoodButton from "./GoodButton.jsx"
import Footer from "./Footer.jsx"
import ProjectSection from "./ProjectSection.jsx"

import PcImage from "./PcImage.jsx"

import "./MainPage.css"

const MainPage = () => {
  return (
    <div className="MainPage">
      <section className="">
        <div className="Bubbles">
        <span style={{"--i":'37'}}></span>
        <span style={{"--i":'30'}}></span>
        <span style={{"--i":'39'}}></span>
        <span style={{"--i":'12'}}></span>
        <span style={{"--i":'16'}}></span>
        <span style={{"--i":'22'}}></span>
        <span style={{"--i":'43'}}></span>
        <span style={{"--i":'14'}}></span>
        <span style={{"--i":'23'}}></span>
        <span style={{"--i":'35'}}></span>
        <span style={{"--i":'48'}}></span>
        <span style={{"--i":'35'}}></span>
        <span style={{"--i":'22'}}></span>
        <span style={{"--i":'15'}}></span>
        <span style={{"--i":'34'}}></span>
        <span style={{"--i":'44'}}></span>
        <span style={{"--i":'18'}}></span>
        <span style={{"--i":'41'}}></span>
        <span style={{"--i":'28'}}></span>
        <span style={{"--i":'10'}}></span>
        <span style={{"--i":'40'}}></span>
        <span style={{"--i":'22'}}></span>
        <span style={{"--i":'35'}}></span>
        <span style={{"--i":'41'}}></span>
        <span style={{"--i":'48'}}></span>
        <span style={{"--i":'11'}}></span>
        <span style={{"--i":'18'}}></span>
        <span style={{"--i":'38'}}></span>
        <span style={{"--i":'18'}}></span>
     </div>
      <div className="Intro">
      <PcImage />
      <div className="introText">
        <div className="introHeading">
          Hello! I am Lakshyajeet.
        </div>
        <div className="introSubText">
           I am a passionate and driven Computer Science and Engineering student with a strong foundation in both theory and practical application.
        </div>
        <GoodButton text="See My Projects" onClickCallback={() => { location.href='#projects';}} />
      </div>
      </div>
      </section>
        <section className="section"><ProjectSection /></section>
        <section className="section"><Footer /></section>
    </div> 
  )
}

export default MainPage
