import "./AboutContent.css"
import React from 'react'
import { Link } from "react-router-dom"
import react1 from "../assets/react1.jpg"
import react2 from "../assets/react2.jpg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I</h1>
            <p> i m A react front-end developer.
                I create Responsive secure Website for my clients
            </p>
            <Link to="/Contact" className="btn">
                <button className="btn">CLICK</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={react1}
                    className="img" alt="true"
                    />
                    </div>
                    <div className="img-stack bottom">
                    <img src={react2}
                    className="img" alt="true"
                    />

                    </div>

            </div>
           </div>
      
    </div>
  )
}

export default AboutContent;
