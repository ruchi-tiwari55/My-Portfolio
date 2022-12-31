import React from 'react'
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Heero2 from '../component/Heero2';
import PricingCard from '../component/PricingCard';
import  Form  from '../component/Form';

const Contact = () => {
  return (
    <div>
       <Navbar/>
       <Heero2 heading="CONTACT." text="Lets have a Chat"/>
      <PricingCard/>
      <Form/>
    <Footer/>
    </div>
  )
}

export default Contact;
