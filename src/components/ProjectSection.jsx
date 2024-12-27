import React from 'react'

import Project from "./Projects.jsx"

import "./ProjectSection.css"

const ProjectSection = () => {
  const projects = [
  {name:"RayTracer",img:"raytracer.png",url:"https://github.com/DarkMatter-999/RayTracer",text:"A simple RayTracer implemented in C++ and OpenGL is a computer graphics program that utilizes the C++ programming language for core ray tracing calculations and leverages the OpenGL graphics library for rendering and visualization."}, 

  {name:"Little Vulkan Engine",img:"lve.jpg",url:"https://github.com/DarkMatter-999/LittleVulkanEngine",text:"A small Vulkan-based rendering engine. This engine provides a simple and minimal setup for rendering graphics using Vulkan API, aimed at helping me learn the basics of Vulkan while building an engine from scratch."}, 

  {name:"PyLeo",img:"pyleo.jpg",url:"https://github.com/DarkMatter-999/PyLeo",text:"A simple yet effective application designed to remind users to take occasional breaks, promoting digital wellbeing. This app helps reduce eye strain, improve posture, and maintain overall health while working long hours on a computer."}, 

  {name:"WhyMDB (IMDB Clone)",img:"whymdb.jpg",url:"https://github.com/DarkMatter-999/WhyyyMDB",text:"An IMDb clone built using ReactJS with the TMDB API is a web application that replicates the functionality and user experience of the popular movie and TV show database, IMDb, but it does so by leveraging the power of ReactJS for the front-end development and the TMDB API for fetching and displaying movie and TV show data."}, 
  ]

  const projectHTML = []

  projects.forEach((i, index)=> {
    projectHTML.push(
      <Project key={index} name={i.name} img={i.img} url={i.url} text={i.text} /> 
    );
  });

  return (
    <div className="ProjectSection" id="projects">
      <h2>Projects</h2>
      {projectHTML}
    </div>
  )
}

export default ProjectSection
