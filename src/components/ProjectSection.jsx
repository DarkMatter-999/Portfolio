import React from 'react'

import Project from "./Projects.jsx"

import "./ProjectSection.css"

const ProjectSection = () => {
  const projects = [
    {name:"WhyMDB (IMDB Clone)",img:"whymdb.jpg",url:"https://github.com/DarkMatter-999/WhyyyMDB",text:"An IMDb clone built using ReactJS with the TMDB API is a web application that replicates the functionality and user experience of the popular movie and TV show database, IMDb, but it does so by leveraging the power of ReactJS for the front-end development and the TMDB API for fetching and displaying movie and TV show data."},  
    {name:"RayTracer",img:"raytracer.png",url:"https://github.com/DarkMatter-999/RayTracer",text:"A simple RayTracer implemented in C++ and OpenGL is a computer graphics program that utilizes the C++ programming language for core ray tracing calculations and leverages the OpenGL graphics library for rendering and visualization."},  
    {name:"NLP Sentiment Analyser",img:"sentiment.png",url:"https://github.com/DarkMatter-999/NLP-SentimentAnalysis",text:"A Natural Language Processing (NLP) Sentiment Analyzer developed using Python, NLTK (Natural Language Toolkit), and TensorFlow is a sophisticated computational tool designed to analyze and assess the sentiment or emotional tone conveyed within textual data. "},  
    {name:"Rumble (Discord Clone)",img:"rumble.png",url:"https://github.com/DarkMatter-999/Rumble-MERN",text:"Rumble is a simple Discord clone built with React is a web-based application that emulates the core features and functionality of the popular chat and communication platform Discord. Using React as its primary front-end framework, and express and MongoDB as backend."},  
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
