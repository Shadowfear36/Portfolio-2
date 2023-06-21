import React from 'react'
import { NavLink } from 'react-router-dom';

export default function ProjectCard({proj}) {
  return (
    <div className="container card">
        <img alt="Dylan's Project" className="card-img m-b-5" src={proj.image}/>
        <h4 className="card-title m-0">{proj.title}</h4>
        <p className="card-desc overflow-hidden">{proj.description}</p>
        <div className="flex flex-row p-b-15 pb-10 flex-end">
            <NavLink target="_blank" to={proj.demo}><button className="btn-1 m-r-3">Demo</button></NavLink>
            <NavLink target="_blank" to={proj.github}><button className="btn-2">Github</button></NavLink>
        </div>
    </div>
  )
}
