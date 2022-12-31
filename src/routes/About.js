import React from 'react'
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Heero2 from '../component/Heero2';
const About = () => {
  return (
    <div>
       <Navbar/>
       <Heero2 heading="ABOUT." text="i m a freindly front end developer"/>
       <Footer/>
    </div>
  )
}

export default About;
