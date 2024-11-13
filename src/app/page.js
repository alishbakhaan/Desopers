'use client'
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Technology from "./components/Technology";


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