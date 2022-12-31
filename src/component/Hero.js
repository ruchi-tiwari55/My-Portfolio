import "./Hero.css"

import React from 'react'
import R from "../assets/R.jpg"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="R" src={R} alt="R"/>
      </div>
      <div className="content">
        <p>HII, I M A DEVELOPER</p>
        <h1> React Developer</h1>
        <div>
            <Link to="/Project" className="btn">Project</Link>
            <Link to="/Contact" className="btn-light">Contact</Link>
        </div>

      </div>
    </div>
  )
}

export default Hero
