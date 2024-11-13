'use client'
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Technology from "./components/Technology";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Routing from "./Routes/Routing";

export default function Home() {
  return (
   <>
   <Router>
      <Routes>
        <Route path="/" element={<Routing />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
   </>
  );
}