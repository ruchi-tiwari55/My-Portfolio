import React from 'react'

import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Heero2 from '../component/Heero2';
import PricingCard from '../component/PricingCard';
import Work from '../component/Work';

const Project = () => {
  return (
    <div>
    <Navbar/>
    <Heero2 heading="PROJECTS." text="some of my most recent workS"/>
    <Footer/>
    <PricingCard/>
    <Work/>

    </div>
  )
}

export default Project
