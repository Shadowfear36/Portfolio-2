import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function Socials() {
  return (
    <div className="btm-right">
      <Link target="_blank" to="https://github.com/Shadowfear36"><BsGithub size="35"/></Link>
      <Link target="_blank" to="https://www.linkedin.com/in/dylan-rhinehart-444813194/"><BsLinkedin size="35"/></Link>
      <Link to="mailto:dylanrhinehart@gmail.com"><MdEmail size="42"/></Link>
    </div>
  )
}
