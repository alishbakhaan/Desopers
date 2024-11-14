'use client'
import Footer from "../src/components/Footer";
import Hero from "../src/components/Hero";
import Navbar from "../src/components/Navbar";
import Portfolio from "../src/components/Portfolio";
import Services from "../src/components/Services";
import Technology from "../src/components/Technology";


export default function Home() {
  return (
   <>
   <Navbar/>
    <Hero/>
    <Services/>
    <Portfolio/>
    <Technology/>
    <Footer/>
   </>
  );
}