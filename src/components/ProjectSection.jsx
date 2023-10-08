import React from 'react'

import Project from "./Projects.jsx"

import "./ProjectSection.css"

const ProjectSection = () => {
  const projects = [
    {name:"RayTracer",img:"raytracer.png",url:"https://github.com/DarkMatter-999/RayTracer",text:"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."},  
    {name:"RayTracer",img:"raytracer.png",url:"https://github.com/DarkMatter-999/RayTracer",text:"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."},  
    {name:"RayTracer",img:"raytracer.png",url:"https://github.com/DarkMatter-999/RayTracer",text:"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."},  
    {name:"RayTracer",img:"raytracer.png",url:"https://github.com/DarkMatter-999/RayTracer",text:"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."},  
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
