import React from 'react';
import Model from './Model';
import { NavLink } from 'react-router-dom';

export default function Landing() {

  return (
    <div className="p-l-25 flex vp-100 m-col p-25 flip-landing">
      <div className="flex flex-column center m-uncenter h-100 w-100 m-mar-t-0">
        <h1 className="title m-0 p-0 m-title">Dylan<br/>Rhinehart</h1>
        <h2 className="sub-title m-0 p-0 m-job">Software Engineer</h2>
        <div className="flex flex-row m-col">
          <NavLink to="/projects"><button className='btn-1 m-r-10 m-t-10'>Projects</button></NavLink>
          <NavLink to="/about"><button className='btn-2 m-t-10'>About Me</button></NavLink>
        </div>
      </div>
      <div className="canvas">
        {/* Change For Interactive Rubiks Cube Eventually */}
        <Model/>
      </div>
        
    </div>
  )
}
