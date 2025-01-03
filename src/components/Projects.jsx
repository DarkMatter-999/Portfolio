import React from 'react'

import GoodButton from "./GoodButton.jsx"

import "./Projects.css"

const Projects = (props) => {
  const image = `/${props.img}`;
  return (
    <div className="Projects">
      <div className="text">
        <h3>{props.name}</h3>
        <p>{props.text}</p>
        <GoodButton text={"See Project"} onClickCallback={() => { location.href=props.url;}} />
      </div>
      <div className="Project-img">
      <img src={image} alt={`${props.name} Screenshot`}/>
      <GoodButton text={"See Project"} onClickCallback={() => { location.href=props.url;}} />
      </div>
      
    </div>
  )
}

export default Projects
