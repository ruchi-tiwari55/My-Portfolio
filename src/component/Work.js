import "./WorkCard.css"
import WorkCard from "./WorkCard"
import WorkCardData from "./WorkCardData";
import React from 'react'
import down from "../assets/download.jpg"
import { NavLink } from "react-router-dom"

const Work = () => {
  return (
    <div className="work-container">
    <h1 className="project-heading">Project</h1>
    <div className="project-container">
        {WorkCardData.map((val,ind)=>{
            return(
                <WorkCard
                key={ind}
                img={val.img}
                title={val.title}
                text={val.text}
                view={val.view}
                />
            )
        })

        }
        
   </div>
    </div>
   
    
  )
}

export default Work
