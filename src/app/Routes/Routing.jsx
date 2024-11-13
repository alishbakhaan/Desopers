import React from 'react'
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Technology from "../components/Technology";

const Routing = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <Portfolio/>
    <Technology/>
    <Footer/>
    </>
  )
}

export default Routing


