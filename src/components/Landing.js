import React from 'react';
import Model from './Model';
import { NavLink } from 'react-router-dom';

export default function Landing() {

  return (
    <div className="p-l-25 flex vp-100">
      <div className="flex flex-column center h-100 w-100">
        <h1 className="title m-0 p-0">Dylan<br/>Rhinehart</h1>
        <h2 className="sub-title m-0 p-0">Software Engineer</h2>
        <div className="flex flex-row m-col">
          <NavLink to="/projects"><button className='btn-1 m-r-10 m-t-10'>Projects</button></NavLink>
          <NavLink to="/about"><button className='btn-2 m-t-10'>About Me</button></NavLink>
        </div>
      </div>
      <div className="canvas">
        {/* Insert 3D Rubiks Cube */}
        <Model/>
      </div>
        
    </div>
  )
}
