import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Header({page}) {
    const checkPage = () => {
        if (page == "projects") {
            return <NavLink to="/about"><button className='btn-2 top-right'>About Me</button></NavLink>
        } else {
            return <NavLink to="/projects"><button className='btn-2 top-right'>Projects</button></NavLink>
        }
    }
  return (
    <div className="header">
        <NavLink className="logo" to="/"><h3 className="m-0">Dylan Rhinehart</h3></NavLink>
        {checkPage()}
    </div>
  )
}
